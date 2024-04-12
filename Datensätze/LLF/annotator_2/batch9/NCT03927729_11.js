'EXC'

'-  Patient receiving an intravenous approach for analgesia'

'-  Patient eq(temporal_per(PRESENT)) an mod("intravenous") approach for drug("analgesia")'

drug("analgesia")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .mod("intravenous")