'INC'

'2.  A Hamilton scale score ( HDS - 17 ) of ≥ 18 and / or a sub - scale ( HDSS ) score of ≥ 9 within 24 - 48 hours before the first treatment'

'2.  A clin_score("Hamilton scale") score ( obs("HDS - 17") ) of eq(op(GTEQ), val("18")) and / or a clin_score("sub - scale") ( obs("HDSS") ) score of eq(op(GTEQ), val("9")) eq(op(LTEQ), val("24"), op(BETWEEN), val("48"), temporal_unit(HOUR)) before the eq(temporal_rec(FIRST_TIME)) proc()'

seq(
    union(
        clin_score("Hamilton scale")
            .equiv(
                obs("HDS - 17")
            )
            .num_filter(
                eq(op(GTEQ), val("18"))
            ),
        clin_score("sub - scale")
            .equiv(
                obs("HDSS")
            )
            .num_filter(
                eq(op(GTEQ), val("9"))
            )
    ),
    before(
        proc()
            .temporality(
                and(
                    eq(op(LTEQ), val("24"), op(BETWEEN), val("48"), temporal_unit(HOUR)),
                    eq(temporal_rec(FIRST_TIME))
                )
            )

    )
)