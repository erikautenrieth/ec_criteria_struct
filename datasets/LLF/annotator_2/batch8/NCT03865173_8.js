'EXC'

'-  Patient died during the initial stay'

'-  Patient death() during the eq(temporal_rec(FIRST_TIME)) enc(INPATIENT)'

seq(
    death(),
    during(
        enc(INPATIENT)
            .temporality(
                eq(temporal_rec(FIRST_TIME))
            )
    )
)