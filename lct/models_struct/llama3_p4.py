import os
import tiktoken
import transformers
from helper_functions import *
from openai import OpenAI


batch_path = "eval_p4"
n_shot = 20

model_id =  "meta-llama/Meta-Llama-3-70B-Instruct"
model_name = "Llama-3-70B-Instruct"

transform_lct ="/work/eauten2s/ec_criteria_struct/lct"


model_desc = read_text_file(f"{transform_lct}/input/prompt/all_entitys_prompt1.txt")
command = "Structure the eligibility criteria based on the system input in JSON and extract the entities."
study_path = f"{transform_lct}/input/dataset_p4_prompt1_new/test/input/"

output_path = f"{transform_lct}/evaluate_struct/{batch_path}/model_output/{model_name}_{str(n_shot)}_Shot_short_files/output/"
os.makedirs(output_path, exist_ok=True)

study_files = os.listdir(study_path)


# MAX Files
additional = [
    "NCT03863509_inc.txt",
    "NCT03861819_inc.txt",
    "NCT03865589_inc.txt",
    "NCT03867344_exc.txt",
    "NCT03928158_exc.txt",
    "NCT03863418_inc.txt",
    "NCT03869086_exc.txt",
    "NCT03923894_exc.txt",
    "NCT03861559_exc.txt",
    "NCT03860350_exc.txt",
    "NCT03867942_inc.txt",
    "NCT03921502_exc.txt",
    "NCT03862027_exc.txt",
    "NCT03929718_exc.txt",
    "NCT03868475_exc.txt"
]


min_line_files = ['NCT03860012_inc.txt', 'NCT03860025_inc.txt', 'NCT03860064_exc.txt', 'NCT03860116_exc.txt', 'NCT03860116_inc.txt', 
                  'NCT03860142_exc.txt', 'NCT03860142_inc.txt', 'NCT03860181_inc.txt', 'NCT03860220_inc.txt', 'NCT03860246_exc.txt', 
                  'NCT03860259_exc.txt', 'NCT03860259_inc.txt', 'NCT03860363_inc.txt', 'NCT03860480_exc.txt', 'NCT03860493_exc.txt', 
                  'NCT03860623_inc.txt', 'NCT03860701_inc.txt', 'NCT03860714_exc.txt', 'NCT03860714_inc.txt', 'NCT03860779_inc.txt', 
                  'NCT03860792_inc.txt', 'NCT03860870_exc.txt', 'NCT03860870_inc.txt', 'NCT03860909_inc.txt', 'NCT03860922_exc.txt',
                  'NCT03860974_inc.txt', 'NCT03861065_inc.txt', 'NCT03861078_exc.txt', 'NCT03861117_inc.txt', 'NCT03861208_exc.txt',
                  'NCT03861221_inc.txt', 'NCT03861286_exc.txt', 'NCT03861286_inc.txt', 'NCT03861377_inc.txt', 'NCT03861689_inc.txt', 
                  'NCT03861741_inc.txt', 'NCT03861806_inc.txt', 'NCT03862001_exc.txt', 'NCT03862027_inc.txt', 'NCT03862235_exc.txt', 
                  'NCT03862261_exc.txt', 'NCT03862404_exc.txt', 'NCT03862417_inc.txt', 'NCT03862469_inc.txt', 'NCT03862573_inc.txt', 
                  'NCT03862612_inc.txt', 'NCT03862638_inc.txt', 'NCT03862703_inc.txt', 'NCT03862742_exc.txt', 'NCT03862846_inc.txt', 
                  'NCT03862937_exc.txt', 'NCT03862963_inc.txt', 'NCT03862976_inc.txt', 'NCT03862989_exc.txt', 'NCT03863015_inc.txt', 
                  'NCT03863158_exc.txt', 'NCT03863171_inc.txt', 'NCT03863197_inc.txt', 'NCT03863210_exc.txt', 'NCT03863223_inc.txt', 
                  'NCT03863236_inc.txt', 'NCT03863262_exc.txt', 'NCT03863314_exc.txt', 'NCT03863366_inc.txt', 'NCT03863379_inc.txt',
                  'NCT03863405_inc.txt', 'NCT03863470_exc.txt', 'NCT03863470_inc.txt', 'NCT03863496_inc.txt', 'NCT03863548_inc.txt',
                  'NCT03863561_inc.txt', 'NCT03863600_inc.txt', 'NCT03863626_exc.txt', 'NCT03863626_inc.txt', 'NCT03863652_exc.txt', 
                  'NCT03863678_inc.txt', 'NCT03863743_inc.txt', 'NCT03863756_exc.txt', 'NCT03863821_exc.txt', 'NCT03863873_inc.txt', 
                  'NCT03863886_exc.txt', 'NCT03863912_inc.txt', 'NCT03864003_exc.txt', 'NCT03864016_inc.txt', 'NCT03864029_inc.txt',
                  'NCT03864094_inc.txt', 'NCT03864120_inc.txt', 'NCT03864302_exc.txt', 'NCT03864315_inc.txt', 'NCT03864354_exc.txt',
                  'NCT03864367_exc.txt', 'NCT03864393_inc.txt', 'NCT03864471_inc.txt', 'NCT03864510_exc.txt', 'NCT03864549_inc.txt', 'NCT03864562_inc.txt', 'NCT03864614_inc.txt', 'NCT03864653_exc.txt', 'NCT03864653_inc.txt', 'NCT03864692_exc.txt', 'NCT03864757_inc.txt', 'NCT03864770_inc.txt', 'NCT03864861_exc.txt', 'NCT03864861_inc.txt', 'NCT03864874_exc.txt', 'NCT03864900_inc.txt', 'NCT03864939_inc.txt', 'NCT03864991_exc.txt', 'NCT03864991_inc.txt', 'NCT03865160_exc.txt', 'NCT03865225_inc.txt', 'NCT03865251_exc.txt', 'NCT03865316_exc.txt', 'NCT03865342_inc.txt', 'NCT03865355_exc.txt', 'NCT03865355_inc.txt', 'NCT03865381_exc.txt', 'NCT03865407_inc.txt', 'NCT03865550_inc.txt', 'NCT03865680_inc.txt', 'NCT03865745_inc.txt', 'NCT03865797_exc.txt', 'NCT03865836_exc.txt', 'NCT03865836_inc.txt', 'NCT03865862_exc.txt', 'NCT03866044_inc.txt', 'NCT03866070_exc.txt', 'NCT03866070_inc.txt', 'NCT03866096_inc.txt', 'NCT03866122_exc.txt', 'NCT03866265_exc.txt', 'NCT03866460_inc.txt', 'NCT03866512_inc.txt', 'NCT03866603_inc.txt', 'NCT03866655_exc.txt', 'NCT03866655_inc.txt', 'NCT03866707_exc.txt', 'NCT03866746_inc.txt', 'NCT03866811_inc.txt', 'NCT03866876_exc.txt', 'NCT03866889_inc.txt', 'NCT03867019_inc.txt', 'NCT03867032_inc.txt', 'NCT03867058_inc.txt', 'NCT03867227_inc.txt', 'NCT03867240_inc.txt', 'NCT03867266_inc.txt', 'NCT03867279_exc.txt', 'NCT03867344_inc.txt', 'NCT03867370_inc.txt', 'NCT03867409_inc.txt', 'NCT03867422_exc.txt', 'NCT03867422_inc.txt', 'NCT03867552_inc.txt', 'NCT03867565_inc.txt', 'NCT03867604_exc.txt', 'NCT03867604_inc.txt', 'NCT03867656_inc.txt', 'NCT03867695_inc.txt', 'NCT03867721_exc.txt', 'NCT03867838_exc.txt', 'NCT03867864_inc.txt', 'NCT03867877_inc.txt', 'NCT03867890_exc.txt', 'NCT03867903_exc.txt', 'NCT03867903_inc.txt', 'NCT03867968_exc.txt', 'NCT03868033_inc.txt', 'NCT03868111_inc.txt', 'NCT03868124_inc.txt', 'NCT03868137_inc.txt', 'NCT03868267_exc.txt', 'NCT03868280_inc.txt', 'NCT03868306_exc.txt', 'NCT03868358_inc.txt', 'NCT03868397_inc.txt', 'NCT03868475_inc.txt', 'NCT03868488_exc.txt', 'NCT03868488_inc.txt', 'NCT03868514_exc.txt', 'NCT03868592_inc.txt', 'NCT03868605_inc.txt', 'NCT03868618_inc.txt', 'NCT03868631_inc.txt', 'NCT03868657_inc.txt', 'NCT03868735_exc.txt', 'NCT03868787_inc.txt', 'NCT03868800_exc.txt', 'NCT03868878_exc.txt', 'NCT03868982_exc.txt', 'NCT03869021_exc.txt', 'NCT03869021_inc.txt', 'NCT03869086_inc.txt', 'NCT03869112_exc.txt', 'NCT03869203_exc.txt', 'NCT03869216_exc.txt', 'NCT03869216_inc.txt', 'NCT03869255_inc.txt', 'NCT03869411_inc.txt', 'NCT03869476_exc.txt', 'NCT03869515_exc.txt', 'NCT03869554_exc.txt', 'NCT03869567_exc.txt', 'NCT03869645_inc.txt', 'NCT03869710_exc.txt', 'NCT03869723_exc.txt', 'NCT03869723_inc.txt', 'NCT03869749_inc.txt', 'NCT03869775_inc.txt', 'NCT03869788_inc.txt', 'NCT03869801_exc.txt', 'NCT03869918_exc.txt', 'NCT03869996_exc.txt', 'NCT03920332_inc.txt', 'NCT03920384_exc.txt', 'NCT03920384_inc.txt', 'NCT03920696_exc.txt', 'NCT03920787_exc.txt', 'NCT03920787_inc.txt', 'NCT03920800_inc.txt', 'NCT03920813_exc.txt', 'NCT03920813_inc.txt', 'NCT03920878_exc.txt', 'NCT03920878_inc.txt', 'NCT03921086_exc.txt', 'NCT03921086_inc.txt', 'NCT03921112_exc.txt', 'NCT03921138_exc.txt', 'NCT03921164_exc.txt', 'NCT03921190_inc.txt', 'NCT03921216_exc.txt', 'NCT03921489_exc.txt', 'NCT03921502_inc.txt', 'NCT03921567_inc.txt', 'NCT03921619_exc.txt', 'NCT03921632_inc.txt', 'NCT03921658_exc.txt', 'NCT03921697_exc.txt', 'NCT03921710_exc.txt', 'NCT03921749_inc.txt', 'NCT03921788_exc.txt', 'NCT03921788_inc.txt', 'NCT03921840_exc.txt', 'NCT03921840_inc.txt', 'NCT03921905_inc.txt', 'NCT03922009_inc.txt', 'NCT03922087_exc.txt', 'NCT03922178_inc.txt', 'NCT03922256_exc.txt', 'NCT03922256_inc.txt', 'NCT03922295_exc.txt', 'NCT03922295_inc.txt', 'NCT03922386_inc.txt', 'NCT03922425_inc.txt', 'NCT03922451_inc.txt', 'NCT03922503_exc.txt', 'NCT03922568_exc.txt', 'NCT03922568_inc.txt', 'NCT03922581_exc.txt', 'NCT03922594_inc.txt', 'NCT03922607_inc.txt', 'NCT03922685_exc.txt', 'NCT03922737_inc.txt', 'NCT03922828_inc.txt', 'NCT03922841_inc.txt', 'NCT03922906_inc.txt', 'NCT03922919_inc.txt', 'NCT03923023_exc.txt', 'NCT03923023_inc.txt', 'NCT03923049_inc.txt', 'NCT03923062_inc.txt', 'NCT03923075_inc.txt', 'NCT03923153_inc.txt', 'NCT03923205_inc.txt', 'NCT03923231_exc.txt', 'NCT03923413_inc.txt', 'NCT03923426_exc.txt', 'NCT03923504_exc.txt', 'NCT03923504_inc.txt', 'NCT03923556_inc.txt', 'NCT03923595_exc.txt', 'NCT03923595_inc.txt', 'NCT03923608_inc.txt', 'NCT03923621_exc.txt', 'NCT03923621_inc.txt', 'NCT03923647_exc.txt', 'NCT03923686_exc.txt', 'NCT03923764_exc.txt', 'NCT03923764_inc.txt', 'NCT03923816_exc.txt', 'NCT03923920_inc.txt', 'NCT03923972_inc.txt', 'NCT03923985_inc.txt', 'NCT03924037_inc.txt', 'NCT03924076_exc.txt', 'NCT03924076_inc.txt', 'NCT03924102_exc.txt', 'NCT03924128_inc.txt', 'NCT03924297_inc.txt', 'NCT03924336_exc.txt', 'NCT03924349_exc.txt', 'NCT03924362_inc.txt', 'NCT03924427_exc.txt', 'NCT03924531_inc.txt', 'NCT03924609_exc.txt', 'NCT03924752_exc.txt', 'NCT03924804_inc.txt', 'NCT03924960_exc.txt', 'NCT03924999_exc.txt', 'NCT03924999_inc.txt', 'NCT03925038_inc.txt', 'NCT03925155_exc.txt', 'NCT03925285_inc.txt', 'NCT03925298_inc.txt', 'NCT03925311_exc.txt', 'NCT03925363_exc.txt', 'NCT03925402_exc.txt', 'NCT03925441_inc.txt', 'NCT03925506_exc.txt', 'NCT03925584_exc.txt', 'NCT03925610_inc.txt', 'NCT03925753_inc.txt', 'NCT03925779_inc.txt', 'NCT03925922_inc.txt', 'NCT03925948_exc.txt', 'NCT03925961_exc.txt', 'NCT03926000_exc.txt', 'NCT03926000_inc.txt', 'NCT03926026_inc.txt', 'NCT03926039_exc.txt', 'NCT03926156_exc.txt', 'NCT03926273_inc.txt', 'NCT03926325_exc.txt', 'NCT03926403_inc.txt', 'NCT03926455_inc.txt', 'NCT03926481_inc.txt', 'NCT03926533_inc.txt', 'NCT03926559_exc.txt', 'NCT03926559_inc.txt', 'NCT03926637_inc.txt', 'NCT03926650_inc.txt', 'NCT03926663_exc.txt', 'NCT03926663_inc.txt', 'NCT03926676_inc.txt', 'NCT03926702_inc.txt', 'NCT03926767_inc.txt', 'NCT03926858_exc.txt', 'NCT03926858_inc.txt', 'NCT03926949_exc.txt', 'NCT03926949_inc.txt', 'NCT03927079_inc.txt', 'NCT03927300_inc.txt', 'NCT03927339_inc.txt', 'NCT03927404_exc.txt', 'NCT03927417_inc.txt', 'NCT03927469_inc.txt', 'NCT03927651_exc.txt', 'NCT03927729_inc.txt', 'NCT03927742_inc.txt', 'NCT03927820_exc.txt', 'NCT03927820_inc.txt', 'NCT03927833_inc.txt', 'NCT03927859_inc.txt', 'NCT03927937_inc.txt', 'NCT03928002_inc.txt', 'NCT03928054_exc.txt', 'NCT03928054_inc.txt', 'NCT03928444_inc.txt', 'NCT03928587_exc.txt', 'NCT03928613_inc.txt', 'NCT03928652_exc.txt', 'NCT03928678_inc.txt', 'NCT03928691_exc.txt', 'NCT03928691_inc.txt', 'NCT03928730_exc.txt', 'NCT03928756_inc.txt', 'NCT03928782_inc.txt', 'NCT03928860_inc.txt', 'NCT03928938_inc.txt', 'NCT03928951_exc.txt', 'NCT03928951_inc.txt', 'NCT03928977_exc.txt', 'NCT03928990_inc.txt', 'NCT03929068_inc.txt', 'NCT03929159_exc.txt', 'NCT03929237_exc.txt', 'NCT03929458_inc.txt', 'NCT03929575_inc.txt', 'NCT03929640_inc.txt', 'NCT03929653_exc.txt', 'NCT03929679_exc.txt', 'NCT03929874_inc.txt', 'NCT03930108_exc.txt', 'NCT03930849_exc.txt', 'NCT03931772_inc.txt', 'NCT03932045_inc.txt', 'NCT03932929_exc.txt', 'NCT03932929_inc.txt', 'NCT03934151_exc.txt', 'NCT03934151_inc.txt', 'NCT03934554_exc.txt', 
                  'NCT03934554_inc.txt', 'NCT03934593_inc.txt']


# Ausgewählte Files
short_files = [
"NCT03860714_inc.txt",
"NCT03860012_exc.txt",
"NCT03860090_exc.txt",
"NCT03863756_exc.txt",
"NCT03926949_inc.txt",
"NCT03868865_exc.txt",
"NCT03867422_inc.txt",
"NCT03864653_exc.txt",
"NCT03922269_inc.txt",
"NCT03921138_exc.txt",
'NCT03860025_inc.txt',
'NCT03861221_inc.txt',
'NCT03861286_inc.txt',
'NCT03860779_inc.txt',
'NCT03860493_exc.txt',
'NCT03861689_inc.txt',
'NCT03863223_inc.txt',
'NCT03861078_exc.txt',
'NCT03863548_inc.txt',
'NCT03863873_inc.txt',
'NCT03864315_inc.txt',
'NCT03864549_inc.txt'
]

study_folder = f"{transform_lct}/input/dataset_p4_prompt1_new/train/input/"
label_folder = f"{transform_lct}/input/dataset_p4_prompt1_new/train/output/"


study_filenames, study_contents, label_filenames, label_contents = read_matching_txt_files(study_folder, label_folder, short_files)

studies = dict(zip(study_filenames, study_contents))
labels = dict(zip(label_filenames, label_contents))
messages = []

messages.append({"role": "system", "content": f"{model_desc}"})


for i in range(n_shot):
    messages.append({"role": "user", "content": f"{command} {studies[study_filenames[i]]}"})
    messages.append({"role": "assistant", "content": labels[label_filenames[i]]})


pipeline = transformers.pipeline(
            "text-generation",
            model=model_id,
            model_kwargs={"torch_dtype": torch.bfloat16},
            device_map="auto", 
        )

first_call = True

for file in study_files:
    file_name = file.split(".")[0]
    print("File:", file_name, "\n")
    test_file = read_text_file(study_path+file)

    if first_call:
        messages.append({"role": "user", "content": f"{command} {test_file}"})
        first_call = False
    else:
        messages[-1] = {"role": "user", "content": f"{command} {test_file}"}

    prompt = pipeline.tokenizer.apply_chat_template(
                messages, 
                tokenize=False, 
                add_generation_prompt=True
    )

    terminators = [
            pipeline.tokenizer.eos_token_id,
            pipeline.tokenizer.convert_tokens_to_ids("<|eot_id|>")
    ]

    outputs = pipeline(
            prompt,
            max_new_tokens=2048,
            eos_token_id=terminators,
            do_sample=True,
            temperature=0.5,
            top_p=0.95,
    )

    gen_output = outputs[0]["generated_text"][len(prompt):]
    save_json(gen_output, f"{output_path}{model_name}_{file_name}.json")