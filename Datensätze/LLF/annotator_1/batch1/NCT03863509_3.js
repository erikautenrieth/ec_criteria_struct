'INC'

'-  not using cigars / smokeless / snus tobacco > / = 1 time per week'

'-  neg() eq(temporal_per(PRESENT)) drug("cigars") / drug("smokeless") / drug("snus tobacco") eq(op(GTEQ), val("1"), per(WEEK))'

neg(
    union(
        drug("cigars"),
        drug("smokeless"),
        drug("snus tobacco")
    )
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .num_filter(
        eq(op(GTEQ), val("1"), per(WEEK))
    )
)