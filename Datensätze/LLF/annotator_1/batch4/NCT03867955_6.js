'EXC'

'-  Having been asleep under general anesthesia in the 7 days prior to the current surgery'

'-  Having been asleep under proc("general anesthesia") in the eq(val("7"), temporal_unit(DAY)) prior to the eq(temporal_per(PRESENT)) proc("surgery")'

seq(
    proc("general anesthesia"),
    before(
        proc("surgery")
            .temporality(
                eq(temporal_per(PRESENT))
            ),
        eq(val("7"), temporal_unit(DAY))
    )
)