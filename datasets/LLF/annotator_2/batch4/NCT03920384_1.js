'INC'

'-  Are aged 16 or over'

'-  Are age() eq(val("16"), op(GTEQ))'

age()
    .num_filter(
        eq(val("16"), op(GTEQ))
    )