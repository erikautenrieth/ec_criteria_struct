'INC'

'-  ASA I , II and III patients'

'-  clin_score("ASA") eq(val("I"), val("II"), val("III")) patients'

clin_score("ASA")
    .num_filter(
        eq(val("I"), val("II"), val("III"))
    )