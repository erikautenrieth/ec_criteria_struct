'INC'

'-  Patients who will undergo pleuroscopy with biopsy'

'-  Patients who eq(temporal_per(FUTURE)) proc("pleuroscopy") with proc("biopsy")'

intersect(
    proc("pleuroscopy"),
    proc("biopsy")
)
    .temporality(
        eq(temporal_per(FUTURE))
    )