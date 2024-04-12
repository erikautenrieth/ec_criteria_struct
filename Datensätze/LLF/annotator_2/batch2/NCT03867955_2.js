'INC'

'-  Score American Society of Anesthesiologists ( ASA ) 1 or 2'

'-  Score clin_score("American Society of Anesthesiologists") ( clin_score("ASA") ) eq(val("1"), val("2"))'

clin_score("American Society of Anesthesiologists")
    .equiv(
        clin_score("ASA")
    )
    .num_filter(
        eq(val("1"), val("2"))
    )