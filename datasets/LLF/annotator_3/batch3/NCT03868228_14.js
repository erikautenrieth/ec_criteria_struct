'EXC'

'7.  Previous bone marrow suppression due to chemotherapy given risk of post - operative neutropenia'

'7.  eq(temporal_per(PAST)) cond("bone marrow suppression") due to proc("chemotherapy") given risk() of post - proc("operative") cond("neutropenia")'


intersect(
    cond("bone marrow suppression")
        .temporality(
            eq(temporal_per(PAST))
        )
        .caused_by(
            proc("chemotherapy")
        ),
    seq(
        proc("operative"),
        after(
            risk(
                cond("neutropenia")
            )
        )
    )
)

