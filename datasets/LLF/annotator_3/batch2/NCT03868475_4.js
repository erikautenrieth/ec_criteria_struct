'EXC'

'-  Women who are considered high - risk based on a greater than 25 % lifetime risk of breast cancer as per the IBIS ( International Breast Cancer Intervention Study ) Breast Cancer Risk Evaluation Tool'

'-  female() who are considered pol(HIGH) - risk() based on a eq(op(GT), val("25"), unit("%")) lifetime risk of cond("breast cancer") as per the IBIS ( International Breast Cancer Intervention Study ) proc("Breast Cancer Risk Evaluation Tool")'

intersect(
    female(),
    risk(
        cond("breast cancer")
    )
        .pol(HIGH)
        .num_filter(
            eq(op(GT), val("25"), unit("%"))
        )
        .found_by(
            proc("Breast Cancer Risk Evaluation Tool")
        )
)
