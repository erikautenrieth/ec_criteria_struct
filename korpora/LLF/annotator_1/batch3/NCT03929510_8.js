'EXC'

'-  History of alcohol abuse or binge drinking and / or any other illicit drug use or dependence within 6 months of Screening .'

'-  eq(temporal_per(PAST)) of cond("alcohol abuse") or cond("binge drinking") and / or any other cond("illicit drug") mod("use") or mod("dependence") eq(op(LTEQ), val("6"), temporal_unit(MONTH)) of Screening .'

union(
    cond("alcohol abuse"),
    cond("binge drinking"),
    cond("illicit drug")
        .mod("use")
        .mod("dependence")
)
.temporality(
    eq(temporal_per(PAST))
)