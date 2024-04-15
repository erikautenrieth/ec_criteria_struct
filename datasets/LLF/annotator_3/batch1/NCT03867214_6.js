'EXC'

'-  Receiving warfarin or heparin ; had a history of hemophilia , deep venous thrombosis , pulmonary embolism , or renal impairment ; or were pregnant ;'

'-  eq(temporal_per(PRESENT)) drug("warfarin") or drug("heparin") ; had a eq(temporal_per(PAST)) of cond("hemophilia") , cond("deep venous thrombosis") , cond("pulmonary embolism") , or cond("renal impairment") ; or eq(temporal_per(PAST)) cond("pregnant") ;'

union(
    union(
        drug("warfarin"),
        drug("heparin")
    )
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    union(
        cond("hemophilia"),
        cond("deep venous thrombosis"),
        cond("pulmonary embolism"),
        cond("renal impairment")
    )
        .temporality(
            eq(temporal_per(PAST))
        ),
    cond("pregnant")
        .temporality(
            eq(temporal_per(PAST))
        )
)
