'INC'

'2.  Men > 50 - year - old'

'2.  male() eq(op(GT), val("50"), temporal_unit(YEAR)) - age()'

intersect(
    male(),
    age()
        .num_filter(
            eq(op(GT), val("50"), temporal_unit(YEAR))
        )
)
