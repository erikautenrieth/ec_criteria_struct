'INC'

'-  ICSI cases using DGC for sperm selection'

'-  proc("ICSI") cases eq(temporal_per(PRESENT)) proc("DGC for sperm selection")'

intersect(
    proc("ICSI"),
    proc("DGC for sperm selection")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)