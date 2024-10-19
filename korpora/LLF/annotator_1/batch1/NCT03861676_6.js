'INC'

'-  International Prostate symptom score ( IPSS ) 20 or less'

'-  clin_score("International Prostate symptom score") ( obs("IPSS") ) eq(val("20"), op(LTEQ))'

clin_score("International Prostate symptom score")
    .equiv(
        obs("IPSS")
    )
    .num_filter(
        eq(val("20"), op(LTEQ))
    )