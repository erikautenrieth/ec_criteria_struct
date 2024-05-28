import os
import tempfile
import ray
import xgboost as xgb
from ray import workflow
from ray import serve
from ray import tune
from ray.tune import Tuner
from xgboost_ray.tune import TuneReportCheckpointCallback
from ray.tune.schedulers import ASHAScheduler
from ray.train.xgboost import XGBoostTrainer
@ray.remote(num_cpus=1)
def prepocess_data(data):
    dataset = ray.data.read_csv(data)
    train_dataset, test_dataset = dataset.train_test_split(test_size=0.3)
    return {"train": train_dataset, "test": test_dataset}
@ray.remote(num_cpus=4)
def train_tune_model(dataset):
    train_params = {
        "objective": "binary:logistic",
        "eval_metric": ["logloss", "error"],
    }

    trainer = XGBoostTrainer(
        label_column="target",
        params=train_params,
        datasets={"train": dataset["train"], "test": dataset["test"]},
        callbacks=[TuneReportCheckpointCallback(filename="model.xgb")],
    )

    tune_config = {
        "objective": "binary:logistic",
        "eval_metric": ["logloss", "error"],
        "max_depth": tune.randint(1, 9),
        "min_child_weight": tune.choice([1, 2, 3]),
        "subsample": tune.uniform(0.5, 1.0),
        "eta": tune.loguniform(1e-4, 1e-1),
    }

    scheduler = ASHAScheduler(max_t=1, grace_period=1, reduction_factor=2)

    tuner = Tuner(
        trainer,
        param_space={"params": tune_config},
        tune_config=tune.TuneConfig(
            scheduler=scheduler,
            metric="test-error",
            mode="min",
            num_samples=1,
        ),
    )
    results = tuner.fit()

    best_bst = xgb.Booster()
    best_result = results.get_best_result(metric="test-error", mode="min") #

    with best_result.checkpoint.as_directory() as best_checkpoint_dir:
        best_bst.load_model(os.path.join(best_checkpoint_dir, "model.xgb"))

    best_bst.save_model(TRAINED_MODEL_PATH)

    return best_result

@serve.deployment(num_replicas=2, ray_actor_options={"num_cpus":1, "num_gpus": 0})
class XGBoostModel:
    def __init__(self, model_path: str):
        self.model_path = model_path
        self.model = xgb.Booster()
        self.model.load_model(model_path)

    async def __call__(self, request):
        data = await request.json()
        prediction = self.model.predict(xgb.DMatrix(data))
        return {"prediction": prediction.tolist()}


TRAINED_MODEL_PATH = os.path.join(tempfile.gettempdir(), "xgboost_model.json")
data="s3://anonymous@air-example-data/breast_cancer.csv"

dataset = prepocess_data.bind(data)
model = train_tune_model.bind(dataset)
workflow.run(model)

model_app = XGBoostModel.bind(TRAINED_MODEL_PATH)



#dataset = ray.get(prepocess_data.remote(data))
#model = ray.get(train_tune_model.remote(dataset))