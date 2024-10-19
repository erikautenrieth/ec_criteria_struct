'INC'

'-  ASA I - II'

'-  clin_score("ASA") eq(val("I"), op(BETWEEN), val("II"))'

clin_score("ASA")
    .num_filter(
        eq(val("I"), op(BETWEEN), val("II"))
    )
