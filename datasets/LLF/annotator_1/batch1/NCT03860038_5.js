'INC'

'Subject must have an ECOG ( Eastern Cooperative Oncology Group ) performance status score of 0 - 2 ;'

'Subject must have an clin_score("ECOG") ( clin_score("Eastern Cooperative Oncology Group") ) mod("performance status score") of eq(op(BETWEEN), val("0"), val("2") ;'

clin_score("ECOG")
    .equiv(
        clin_score("Eastern Cooperative Oncology Group")
    )
    .mod("performance status score")
    .num_filter(
        eq(op(BETWEEN), val("0"), val("2"))
    )
