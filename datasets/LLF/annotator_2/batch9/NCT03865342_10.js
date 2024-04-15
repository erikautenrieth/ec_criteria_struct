'EXC'

'-  more than 72 hours of hospitalization in the last 30 days'

'-  eq(op(GT), val("72"), temporal_unit(HOUR)) of enc(INPATIENT) eq(op(LTEQ), temporal_per(PAST), val("30"), temporal_unit(DAY))'

enc(INPATIENT)
    .temporality(
        and(
            eq(op(GT), val("72"), temporal_unit(HOUR)),
            eq(op(LTEQ), temporal_per(PAST), val("30"), temporal_unit(DAY))
        )
    )