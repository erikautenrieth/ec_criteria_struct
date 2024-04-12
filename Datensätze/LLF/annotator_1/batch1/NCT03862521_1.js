'INC'

'-  Prepubertal children 2 to < 12 years old ( i . e . , before 12 th birthday )'

'-  Prepubertal child() eq(val("2"), op(BETWEEN), op(LT), val("12"), temporal_unit(YEAR)) age() ( i . e . , before eq(op(LT), val("12")) th age() )'

intersect(
    child(), 
    age()
        .num_filter(
            eq(val("2"), op(BETWEEN), op(LT), val("12"), temporal_unit(YEAR))
        )
        .equiv(
            age()
                .eq(op(LT), val("12"))
        )
)