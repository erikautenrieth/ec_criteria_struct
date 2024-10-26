'INC'

'-  ASA physical status I'

'-  clin_score("ASA") physical status eq(val("I"))'

clin_score("ASA")
    .num_filter(
        eq(val("I"))
    )