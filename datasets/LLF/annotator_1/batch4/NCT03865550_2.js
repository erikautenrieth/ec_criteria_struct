'INC'

'-  ASA I - IV'

'-  clin_score("ASA") eq(val("I"), op(BETWEEN), val("IV"))'

clin_score("ASA")
    .num_filter(
        eq(val("I"), op(BETWEEN), val("IV"))
    )