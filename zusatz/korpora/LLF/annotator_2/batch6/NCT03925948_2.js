'INC'

'-  had uncontrolled diabetes ( defined as HbA 1C > 7 % )'

'-  had change() cond("diabetes") ( defined as lab("HbA 1C") eq(op(GT), val("7"), unit("%")) )'

cond("diabetes")
    .change()
    .equiv(
        lab("HbA 1C")
            .num_filter(
                eq(op(GT), val("7"), unit("%"))
            )
    )