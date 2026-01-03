'INC'

'-  Patients must have at least one posterior proximal caries'

'-  Patients must have eq(op(GTEQ), val("one")) mod("posterior proximal") cond("caries")'

cond("caries")
    .min_count(
        eq(op(GTEQ), val("one"))
    )
    .mod("posterior proximal")