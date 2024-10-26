'EXC'

'-  Are not between 18 and 50 years of age .'

'-  Are neg() eq(op(BETWEEN), val("18"), val("50"), temporal_unit(YEAR)) of age() .'

neg(
    age()
        .num_filter(
            eq(op(BETWEEN), val("18"), val("50"), temporal_unit(YEAR))
        )
)
    