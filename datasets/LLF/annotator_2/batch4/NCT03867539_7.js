'EXC'

'-  patients taking tricyclic antidepressants ( interaction with bupivacaine )'

'-  patients eq(temporal_per(PRESENT)) drug("tricyclic antidepressants") ( change() with drug("bupivacaine") )'

drug("bupivacaine")
    .change()
    .caused_by(
        drug("tricyclic antidepressants")
            .temporality(
                eq(temporal_per(PRESENT))
        )
    )