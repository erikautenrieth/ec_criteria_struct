'INC'

'-  Mild to moderate cognitive impairment ( BIMS = 8 - 15 , ( MDS C 0500 ) ( nursing home residents only )'

'-  severity(MILD) to severity(MODERATE) cond("cognitive impairment") ( obs("BIMS") eq(op(EQ), val("8"), op(BETWEEN), val("15")) , ( code("MDS C 0500") ) ( loc(res("nursing home")) residents only )'

cond("cognitive impairment")
    .severity(MILD)
    .severity(MODERATE)
    .equiv(
        obs("BIMS")
            .num_filter(
                eq(op(EQ), val("8"), op(BETWEEN), val("15"))
            )
            .equiv(
                code("MDS C 0500")
            )
    )
    .loc(res("nursing home"))