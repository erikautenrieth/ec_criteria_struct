'INC'

'-  on a long acting inhaler or prescribed a long acting inhaler during admission .'

'-  eq(temporal_per(PRESENT)) a drug("long acting inhaler") or prescribed a drug("long acting inhaler") during enc(INPATIENT) .'

seq(
    union(
        drug("long acting inhaler")
            .temporality(
                eq(temporal_per(PRESENT))
            ),
        drug("long acting inhaler")
    ),
    during(
        enc(INPATIENT)
    )
)