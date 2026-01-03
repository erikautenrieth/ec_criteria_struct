'EXC'

'-  Participant has prior exposure to anti - interleukin - 1 ( anti - IL - 1 ) treatment within 3 months or 5 half - lives , whichever is longer , prior to baseline .'

'-  Participant has eq(temporal_per(PAST)) exposure to cond("anti - interleukin - 1") ( cond("anti - IL - 1") ) proc() eq(op(LTEQ), val("3"), temporal_unit(MONTH)) or eq(val("5"), unit("half - lives")) , whichever is longer , prior to baseline .'

proc()
    .for(
        cond("interleukin - 1")
            .equiv(
                cond("anti - IL - 1")
            )
    )
    .temporality(
        or(
            eq(op(LTEQ), val("3"), temporal_unit(MONTH)), 
            eq(val("5"), unit("half - lives"))
        )
    )