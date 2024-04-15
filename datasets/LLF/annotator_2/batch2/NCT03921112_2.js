'INC'

'-  ASA I , ASA II , ASA III'

'-  clin_score("ASA") eq(val("I")) , clin_score("ASA") eq(val("II")) , clin_score("ASA") eq(val("III"))'

union(
    clin_score("ASA")
        .num_filter(
            eq(val("I"))
        ),
    clin_score("ASA")
        .num_filter(
            eq(val("I"))
        ),
    clin_score("ASA")
        .num_filter(
            eq(val("I"))
        )
)        