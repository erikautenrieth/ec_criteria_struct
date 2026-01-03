'EXC'

'-  Exclusion criteria will include non - English speaking , no working telephone , and less than 5 th grade education level .'

'-  Exclusion criteria will include neg() - lang("English") speaking , no working telephone , and eq(op(LT), val("5 th"), unit("grade")) obs("education level") .'

union(
    neg(
        lang("English")
    ),
    obs("education level")
        .num_filter(
            eq(op(LT), val("5 th"), unit("grade"))
        )
)
