'EXC'

'-  History of drug or alcohol dependence within 6 months'

'-  eq(temporal_per(PAST)) of mod("drug") or mod("alcohol") cond("dependence") eq(op(LTEQ), val("6"), temporal_unit(MONTH))'

cond("dependence")
    .mod("drug")
    .mod("alcohol")
    .temporality(
        eq(temporal_per(PAST)), eq(op(LTEQ), val("6"), temporal_unit(MONTH))
    )