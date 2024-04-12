'INC'

'2.  ≥ 15 headache days of which ≥ 8 headache days meet criteria as migraine days during the baseline period'

'2.  eq(op(GTEQ), val("15"), temporal_unit(DAY)) cond("headache") days of which meet criteria as cond("migraine") days during the baseline period'

cond("headache")
    .min_count(
        eq(op(GTEQ), val("15"), temporal_unit(DAY))
    )
    .equiv(
        cond("migraine")
    )