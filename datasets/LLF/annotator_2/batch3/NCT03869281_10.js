'INC'

'-  presence of at least one diabetes - related complication ( either neuropathy , retinopathy , subclinical nephropathy ) .'

'-  presence of eq(op(GTEQ), val("one")) cond("diabetes") - related cond() ( either cond("neuropathy") , cond("retinopathy") , mod("subclinical") cond("nephropathy") ) .'

cond()
    .min_count(
        eq(op(GTEQ), val("one"))
    )
    .equiv(
        cond("neuropathy"),
        cond("retinopathy"),
        cond("nephropathy")
            .mod("subclinical")
    )
    .caused_by(
        cond("diabetes")
    )