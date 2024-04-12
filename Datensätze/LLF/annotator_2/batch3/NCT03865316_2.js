'INC'

'-  ASA status I , II , or III .'

'-  clin_score("ASA") status eq(val("I"), val("II"), val("III")) .'

clin_score("ASA")
    .num_filter(
        eq(val("I"), val("II"), val("III"))
    )