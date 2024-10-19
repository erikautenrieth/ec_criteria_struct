'INC'

'-  Have safety laboratory results within normal reference ranges'

'-  Have mod("safety") lab("laboratory results") eq(op(EQ), unit(REF_RANGE_NORMAL))'

lab("laboratory results")
    .mod("safety")
    .num_filter(
        eq(op(EQ), unit(REF_RANGE_NORMAL))
    )