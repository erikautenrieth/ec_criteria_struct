'INC'

'-  Diagnosis of Type 1 Diabetes according to the American Diabetes Association criteria for a period less than four months .'

'-  Diagnosis of cond("Type 1 Diabetes") according to the American Diabetes Association criteria for a period eq(op(LT), val("four"), temporal_unit(MONTH)) .'

cond("Type 1 Diabetes")
    .duration(
        eq(op(LT), val("four"), temporal_unit(MONTH))
    )