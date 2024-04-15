'EXC'

'-  Children under the age of 18 ;'

'-  child() eq(op(LT), val("18")) ;'

intersect(
    child(),
    age()
        .num_filter(
            eq(op(LT), val("18"))
        )
)