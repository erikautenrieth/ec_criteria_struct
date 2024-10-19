'INC'

'8.  An average daily pain score on the NPRS of at least 4 and no more than 8 in the last five diary entries before randomisation'

'8.  An average eq(per(DAY)) measurement("pain score") on the obs("NPRS") of eq(op(GTEQ), val("4")) and eq(op(LTEQ), val("8")) in the last five diary entries before randomisation'


measurement("pain score")
    .temporality(
        eq(per(DAY))
    )
    .found_by(
        obs("NPRS")
    )
    .num_filter(
        and(
            eq(op(GTEQ), val("4")),
            eq(op(LTEQ), val("8"))
        )
    )