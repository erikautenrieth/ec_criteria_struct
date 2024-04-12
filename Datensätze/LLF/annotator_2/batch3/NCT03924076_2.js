'INC'

'-  have normal body mass index ( BMI ) i . e .  - 2 ≤ z - score < + 1 , slightly overweight z - score < + 1.5 , and slightly underweight z - score > - 3.'

'-  have pol(NORMAL) vital("body mass index") ( vital("BMI") ) i . e .  eq(val("- 2"), op(LTEQ), unit(REF_RANGE_NORMAL), op(LT), val("+ 1")) , severity(MILD) cond("overweight") eq(unit(REF_RANGE_NORMAL), op(LT), val("+ 1.5")) , and severity(MILD) cond("underweight") eq(unit(REF_RANGE_NORMAL), op(GT), val("- 3")).'

union(
    vital("body mass index")
        .pol(NORMAL)
        .equiv(
            vital("BMI")
        )
        .num_filter(
            eq(val("- 2"), op(LTEQ), unit(REF_RANGE_NORMAL), op(LT), val("+ 1"))
        ),
    cond("overweight")
        .severity(MILD)
        .num_filter(
            eq(unit(REF_RANGE_NORMAL), op(LT), val("+ 1.5"))
        ),
    cond("underweight")
        .severity(MILD)
        .num_filter(
            eq(unit(REF_RANGE_NORMAL), op(GT), val("- 3"))
        )
)