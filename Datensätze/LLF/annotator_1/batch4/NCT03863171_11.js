'EXC'

'-  Patients with a history of surgery within 3 months;'

'-  Patients with a eq(temporal_per(PAST)) of proc("surgery") eq(op(LTEQ), val("3"), temporal_unit(MONTH)) ;'

proc("surgery")
    .temporality(
        eq(temporal_per(PAST)), eq(op(LTEQ), val("3"), temporal_unit(MONTH))
    )