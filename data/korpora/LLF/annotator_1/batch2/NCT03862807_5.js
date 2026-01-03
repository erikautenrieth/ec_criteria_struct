'INC'

'-  Has vitamin A level greater than or equal to lower limit of normal'

'-  Has lab("vitamin A level") eq(op(GTEQ), unit(REF_RANGE_NORMAL))'

lab("vitamin A level")
    .num_filter(
        eq(op(GTEQ), unit(REF_RANGE_NORMAL))
    )