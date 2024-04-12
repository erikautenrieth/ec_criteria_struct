'EXC'

'-  ASA 3 or 4 , mental retardation , psychiatric disease , history of malignant hyperthermia in patient or her family , neurological disease , morbid obesity , history of asthma and follow - up in the intensive care unit .'

'-  clin_score("ASA") eq(val("3"), op(BETWEEN), val("4")) , cond("mental retardation") , cond("psychiatric disease") , eq(temporal_per(PAST)) of cond("malignant hyperthermia") in patient or her family_member() , cond("neurological disease") , cond("morbid obesity") , eq(temporal_per(PAST)) of cond("asthma") and enc() in the loc(unit("intensive care unit")) .'

union(
    clin_score("ASA")
        .num_filter(
            eq(val("3"), op(BETWEEN), val("4"))
        ),
    cond("mental retardation"),
    union(
        cond("psychiatric disease")
            .temporality(
                cond("malignant hyperthermia")
            ),
        family_member(
            cond("psychiatric disease")
                .temporality(
                    cond("malignant hyperthermia")
                )
        )
    ),
    cond("neurological disease"),
    cond("morbid obesity"),
    cond("asthma")
        .temporality(
            eq(temporal_per(PAST))
        ),
    enc()
        .loc(unit("intensive care unit"))
)