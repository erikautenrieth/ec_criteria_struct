'INC'

'-  All patients aged 18 or older and with a recent ( < 48 h ) ICU entry requiring mechanical ventilation for at least 3 days will be considered for enrolment'

'-  All patients age() eq(val("18"), op(GTEQ)) and with a eq(temporal_per(RECENT)) ( eq(op(LT), val("48"), temporal_unit(HOUR)) ) loc(unit("ICU")) enc(INPATIENT) indication() proc("mechanical ventilation") for eq(op(GTEQ), val("3"), temporal_unit(DAY)) will be considered for enrolment'

intersect(
    intersect(
        age()
            .num_filter(
                eq(val("18"), op(GTEQ))
            ),
        enc(INPATIENT)
            .temporality(
                eq(temporal_per(RECENT))
            )
            .num_filter(
                eq(op(LT), val("48"), temporal_unit(HOUR))
            )
            .loc(unit("ICU"))
    ),
    indication(
        proc("mechanical ventilation")
            .num_filter(
                eq(op(GTEQ), val("3"), temporal_unit(DAY))
            )
    )
)