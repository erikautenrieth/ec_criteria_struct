'EXC'

'-  History of psychiatric disease ( schizophrenia ) or communication barriers that prevent normal communication before childbirth ;'

'-  eq(temporal_per(PAST)) of cond("psychiatric disease") ( cond("schizophrenia") ) or cond("communication barriers") that neg() pol(NORMAL) obs("communication") before proc("childbirth") ;'

seq(
    neg(
        obs("communication")
            .pol(NORMAL)
    )
        .caused_by(
            union(
                cond("psychiatric disease")
                    .equiv(
                        cond("schizophrenia")
                    ),
                cond("communication barriers")
            )
                .temporality(
                    eq(temporal_per(PAST))
                )
        ),
    before(
        proc("childbirth")
    )
)