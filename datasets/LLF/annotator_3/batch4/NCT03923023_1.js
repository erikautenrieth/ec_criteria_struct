'INC'

'-  Pregnant women who seek Antenatal care services and plan to deliver in the selected health facilities'

'-  cond("Pregnant") female() who seek Antenatal care services and eq(temporal_per(FUTURE)) to proc("deliver") in the loc(hosp("selected health facilities"))'

intersect(
    cond("Pregnant"),
    female(),
    proc("deliver")
        .temporality(
            eq(temporal_per(FUTURE))
        )
        .loc(hosp("selected health facilities"))
)
