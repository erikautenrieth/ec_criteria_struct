'INC'

'-  Inpatient ≥ 18 y . o .  who are scheduled elective colonoscopy during hospitalization irrespective of the indication .'

'-  enc(INPATIENT) eq(op(GTEQ), val("18"), temporal_unit(YEAR)) age() who are eq(temporal_per(FUTURE)) elective proc("colonoscopy") during enc(INPATIENT) irrespective of the indication .'

seq(
    intersect(
        enc(INPATIENT),
        age()
            .num_filter(
                eq(op(GTEQ), val("18"), temporal_unit(YEAR))
            ),
        proc("colonoscopy")
            .temporality(
                eq(temporal_per(FUTURE))
            )
    ),
    during(
        enc(INPATIENT)
    )
)