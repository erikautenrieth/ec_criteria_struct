'EXC'

'3.  Chemotherapy within the past 12 - month period .'

'3.  proc("Chemotherapy") eq(op(LTEQ), temporal_per(PAST), val("12"), temporal_unit(MONTH)) period .'

proc("Chemotherapy")
    .temporality(
        eq(op(LTEQ), temporal_per(PAST), val("12"), temporal_unit(MONTH))
    )