'EXC'

'-  No headache during the pervious 3 months;'

'-  neg() cond("headache") during the eq(temporal_per(PAST), val("3"), temporal_unit(MONTH)) ;'

neg(
    cond("headache")
        .temporality(
            eq(temporal_per(PAST), val("3"), temporal_unit(MONTH))
        )
)