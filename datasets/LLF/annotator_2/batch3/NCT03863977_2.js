'INC'

'-  physical status ASA I - II ( by the American Society of Anesthesiologists ) ,'

'-  physical status clin_score("ASA") eq(val("I"), op(BETWEEN), val("II")) ( by the clin_score("American Society of Anesthesiologists") ) ,'


clin_score("ASA")
    .num_filter(
        eq(val("I"), op(BETWEEN), val("II"))
    )
    .equiv(
        clin_score("American Society of Anesthesiologists")
    )