'INC'

'-  Adults over 50 years old with degenerative scoliosis ( n = 20 ) with pain ( > 2 / 10 ) .  Other inclusion criteria are : ( 1 ) curves 15 ° - 45 ° .'

'-  adult() eq(op(GT), val("50"), temporal_unit(YEAR)) age() with cond("degenerative scoliosis") ( n = 20 ) with obs("pain") ( eq(op(GT), val("2"), val("10")) ) .  Other inclusion criteria are : ( 1 ) obs("curves") eq(val("15"), unit("°"), op(BETWEEN), val("45"), unit("°")) .'

intersect(
    adult(),
    age()
        .num_filter(
            eq(op(GT), val("50"), temporal_unit(YEAR))
        ),
    cond("degenerative scoliosis"),
    obs("pain")
        .num_filter(
            eq(op(GT), val("2"), val("10"))
        ),
    obs("curves")
        .num_filter(
            eq(val("15"), unit("°"), op(BETWEEN), val("45"), unit("°"))
        )
)
