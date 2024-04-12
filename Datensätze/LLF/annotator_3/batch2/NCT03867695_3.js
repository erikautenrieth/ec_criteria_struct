'INC'

'-  Patients who meet criteria of ASA 1 to 3 class'

'-  Patients who meet criteria of clin_score("ASA") eq(val("1"), op(BETWEEN), val("3"), unit("class"))'

clin_score("ASA")
    .num_filter(
        eq(val("1"), op(BETWEEN), val("3"), unit("class"))
    )