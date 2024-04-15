'EXC'

'-  History of corticosteroid injection in the shoulder during the last 3 months'

'-  eq(temporal_per(PAST)) of drug("corticosteroid") injection in the mod("shoulder") during the eq(temporal_per(PAST), val("3"), temporal_unit(MONTH))'

seq(
    drug("corticosteroid")
        .temporality(
            eq(temporal_per(PAST))
        )
        .mod("shoulder"),
    during(
        eq(temporal_per(PAST), val("3"), temporal_unit(MONTH))
    )
)