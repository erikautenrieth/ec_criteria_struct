'EXC'

'-  Treatment with nutritional drinks , probiotics or prebiotics within the last 3 months'

'-  proc() with drug("nutritional drinks") , drug("probiotics") or drug("prebiotics") eq(op(LTEQ), temporal_per(PAST), val("3"), temporal_unit(MONTH))'

union(
    drug("nutritional drinks"),
    drug("probiotics"),
    drug("prebiotics")
)
.temporality(
    eq(op(LTEQ), temporal_per(PAST), val("3"), temporal_unit(MONTH))
)