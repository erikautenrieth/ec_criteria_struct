'INC'

'-  Retinoblastoma is rarely seen in children over 8 years old , however we will not include an upper age range so as not to exclude any possible participants'

'-  cond("Retinoblastoma") is rarely seen in child() eq(op(GT), val("8"), temporal_unit(YEAR)) age() , however we will not include an upper age range so as not to exclude any possible participants'

intersect(
    cond("Retinoblastoma"),
    child(),
    age()
        .num_filter(
            eq(op(GT), val("8"), temporal_unit(YEAR))
        )
)
