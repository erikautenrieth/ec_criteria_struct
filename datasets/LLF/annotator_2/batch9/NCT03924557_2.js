'INC'

'-  Patients must plan to receive chemotherapy known to be associated with the need for supportive care within 30 days of enrollment'

'-  Patients must eq(temporal_per(FUTURE)) to receive proc("chemotherapy") known to be associated with the need for supportive care eq(op(LTEQ), val("30"), temporal_unit(DAY)) of enrollment'

proc("chemotherapy")
    .temporality(
        and(
            eq(temporal_per(FUTURE)),
            eq(op(LTEQ), val("30"), temporal_unit(DAY))
        )
    )