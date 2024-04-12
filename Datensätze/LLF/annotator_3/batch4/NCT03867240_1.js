'INC'

'-  Be aged 10 - 18 years at the time of surgery'

'-  Be age() eq(val("10"), op(BETWEEN), val("18"), temporal_unit(YEAR)) at the time of proc("surgery")'


seq(
    age()
        .num_filter(
            eq(val("10"), op(BETWEEN), val("18"), temporal_unit(YEAR))
        ),
    during(
        proc("surgery")
    )
)
