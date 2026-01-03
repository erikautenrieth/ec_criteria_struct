'INC'

'-  Childhood patients who were undergoing chemotherapy or continuous follow - up after completion of chemotherapy'

'-  child() patients who were eq(temporal_per(PRESENT)) proc("chemotherapy") or continuous enc(OUTPATIENT) after completion of proc("chemotherapy")'

seq(
    intersect(
        child(),
        union(
            proc("chemotherapy"),
            enc(OUTPATIENT)
        )
            .temporality(
                eq(temporal_per(PRESENT))
            )
    ),
    after(
        proc("chemotherapy")
    )
)