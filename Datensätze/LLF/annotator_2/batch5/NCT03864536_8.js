'EXC'

'-  Telephone Interview for Cognitive Status ( TICS ) score ≤ 20'

'-  clin_score("Telephone Interview for Cognitive Status") ( obs("TICS") ) score eq(op(LTEQ), val("20"))'

clin_score("Telephone Interview for Cognitive Status")
    .equiv(
        obs("TICS")
    )
    .num_filter(
        eq(op(LTEQ), val("20"))
    )