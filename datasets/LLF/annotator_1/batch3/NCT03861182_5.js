'INC'

'-  Born beyond 33 Week of Amenorrhea + 1 day and 2 kg of birth weight'

'-  birth() eq(op(GT), val("33"), temporal_unit(WEEK)) cond("Amenorrhea") + eq(val("1"), temporal_unit(DAY)) and eq(val("2"), unit("kg")) of vital("birth weight")'

intersect(
    seq(
        birth(),
        after(
            cond("Amenorrhea"),
            eq(op(GT), val("33"), temporal_unit(WEEK)),
            eq(val("1"), temporal_unit(DAY))
        )
    ),
    vital("birth weight")
        .num_filter(
            eq(val("2"), unit("kg"))
        )
)