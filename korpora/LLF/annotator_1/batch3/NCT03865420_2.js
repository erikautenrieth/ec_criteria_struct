'INC'

'-  No symptoms of ALS or fronto-temporal dementia at enrollment'

'-  neg() possible() of cond("ALS") or mod("fronto-temporal") cond("dementia") at enrollment'

neg(
    cond("ALS")
        .possible(),
    cond("dementia")
        .mod("fronto-temporal")
)