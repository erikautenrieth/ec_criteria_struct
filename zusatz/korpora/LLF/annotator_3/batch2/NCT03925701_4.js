'EXC'

'-  Child score more than 6 .'

'-  child() obs("score") eq(op(GT), val("6")) .'

intersect(
    child(),
    obs("score")
        .num_filter(
            eq(op(GT), val("6"))
        )
)