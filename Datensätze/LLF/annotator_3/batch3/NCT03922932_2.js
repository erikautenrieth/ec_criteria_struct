'INC'

'-  Type 1 diabetes of at least 5 years duration or'

'-  cond("Type 1 diabetes") of eq(op(GTEQ), val("5"), temporal_unit(YEAR)) duration or'

cond("Type 1 diabetes")
    .duration(
        eq(op(GTEQ), val("5"), temporal_unit(YEAR))
    )