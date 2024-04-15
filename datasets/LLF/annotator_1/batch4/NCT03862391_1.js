'INC'

'-  ASA physical status 1 and 2 , underwent gynicological laparotomic surgery under general anesthesia , followed up in PACU ( post operative care unit )'

'-  clin_score("ASA") physical status eq(val("1"), op(BETWEEN), val("2")) , eq(temporal_per(PAST)) proc("gynicological laparotomic surgery") under proc("general anesthesia") , enc() in loc(unit("PACU")) ( loc(unit("post operative care unit")) )'

intersect(
    clin_score("ASA")
        .num_filter(
            eq(val("1"), op(BETWEEN), val("2"))
        ), 
    seq(
        proc("gynicological laparotomic surgery")
            .temporality(
                eq(temporal_per(PAST))
            ),
        during(
            proc("general anesthesia")
        )
    ),
    enc()
        .loc(unit("PACU"))
        .loc(unit("post operative care unit"))
)