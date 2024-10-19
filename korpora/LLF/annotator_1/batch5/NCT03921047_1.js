'INC'

'-  Diagnosis of AML scheduled to undergo HSCT at University of Southern California ( USC )'

'-  Diagnosis of cond("AML") eq(temporal_per(FUTURE)) to undergo proc("HSCT") at loc(hosp("University of Southern California")) ( loc(hosp("USC")) )'

intersect(
    cond("AML"),
    proc("HSCT")
        .temporality(
            eq(temporal_per(FUTURE))
        )
        .loc(hosp("University of Southern California"))
        .loc(hosp("USC"))
)
