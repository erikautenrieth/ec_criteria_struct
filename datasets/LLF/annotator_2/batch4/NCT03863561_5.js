'INC'

'-  A 1C ≥ 8.0 % ( DSME cohort only )'

'-  lab("A 1C") eq(op(GTEQ), val("8.0"), unit("%")) ( DSME cohort only )'

lab("A 1C")
    .num_filter(
        eq(op(GTEQ), val("8.0"), unit("%"))
    )