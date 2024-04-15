'EXC'

'-  Changes brought to the multiple sclerosis treatment within 6 months before enrollment ;'

'-  change() brought to the cond("multiple sclerosis") proc() eq(op(LTEQ), val("6"), temporal_unit(MONTH)) before enrollment ;'

proc()
    .for(
        cond("multiple sclerosis")
    )
    .change()
    .temporality(
        eq(op(LTEQ), val("6"), temporal_unit(MONTH))
    )