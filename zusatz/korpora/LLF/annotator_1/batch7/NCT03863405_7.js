'EXC'

'-  Patients receive metformin for any other indications .'

'-  Patients eq(temporal_per(PRESENT)) drug("metformin") for any other indication() .'

indication(
    drug("metformin")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)
