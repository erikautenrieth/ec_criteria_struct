'INC'

'-  Glasgow coma scale of 15 within 24 hours after admission or extubation'

'-  clin_score("Glasgow coma scale") of eq(val("15")) eq(op(LTEQ), val("24"), temporal_unit(HOUR)) after enc(INPATIENT) or proc("extubation")'

seq(
    clin_score("Glasgow coma scale")
        .num_filter(
            eq(val("15"))
        ),
    after(
        union(
            enc(INPATIENT),
            proc("extubation")
        )
            .temporality(
                eq(op(LTEQ), val("24"), temporal_unit(HOUR))
            )
    )
) 