'EXC'

'-  age older than 1 month not to be operated'

'-  age() eq(op(GT), val("1"), temporal_unit(MONTH)) not to be operated'
age()
    .num_filter(
        eq(op(GT), val("1"), temporal_unit(MONTH))
    )

