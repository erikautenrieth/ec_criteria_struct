'INC'

'-  preterm neonates born at 26 to 34 weeks of gestational age'

'-  cond("preterm") infant() birth() at eq(val("26"), op(BETWEEN), val("34"), temporal_unit(WEEK)) of obs("gestational age")'

intersect(
    cond("preterm"),
    infant(),
    seq(
        birth(),
        during(
            obs("gestational age")
                .num_filter(
                    eq(val("26"), op(BETWEEN), val("34"), temporal_unit(WEEK))
                )
        )
    )
)