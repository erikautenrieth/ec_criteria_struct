'EXC'

'-  Deterioration of neurological symptomatology within 60 day before enrollment ;'

'-  change() of cond("neurological symptomatology") eq(val("60"), temporal_unit(DAY)) before enrollment ;'

cond("neurological symptomatology")
    .change()
    .temporality(
        eq(val("60"), temporal_unit(DAY))
    )