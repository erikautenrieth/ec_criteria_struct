'EXC'

'-  Subjects on medication that affects the salivary flow rate .'

'-  Subjects eq(temporal_per(PRESENT)) drug() that change() the measurement("salivary flow rate") .'

measurement("salivary flow rate")
    .change()
    .caused_by(
        drug()
            .temporality(
                eq(temporal_per(PRESENT))
            )
    )