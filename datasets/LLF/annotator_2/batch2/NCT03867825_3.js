'EXC'

'-  Infants > 1 month of age'

'-  infant() eq(op(GT), val("1"), temporal_unit(MONTH)) of age()'

intersect(
    infant(),
    age()
        .num_filter(
            eq(op(GT), val("1"), temporal_unit(MONTH))
        )
)