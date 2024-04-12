'INC'

'-  Eastern Cooperative Oncology Group ( ECOG ) < 3'

'-  clin_score("Eastern Cooperative Oncology Group") ( clin_score("ECOG") ) eq(op(LT), val("3"))'

clin_score("Eastern Cooperative Oncology Group")
    .equiv(
        clin_score("ECOG")
    )
    .num_filter(
        eq(op(LT), val("3"))    
    )