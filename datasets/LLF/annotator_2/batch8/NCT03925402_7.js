'EXC'

'-  Empirical antibiotic after 24 hours of first evidence of bacteremia'

'-  drug("Empirical antibiotic") after eq(val("24"), temporal_unit(HOUR), temporal_rec(FIRST_TIME)) evidence of cond("bacteremia")'

seq(
    drug("Empirical antibiotic"),
    after(
        cond("bacteremia")
            .temporality(
                eq(val("24"), temporal_unit(HOUR), temporal_rec(FIRST_TIME))
            )
    )
)