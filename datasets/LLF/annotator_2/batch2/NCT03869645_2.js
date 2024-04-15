'INC'

'-  Patients with clinical signs , symptoms and presentation consistent with acute thrombosis ; onset of symptoms < 14 days'

'-  Patients with possible() , possible() and presentation consistent with acute() cond("thrombosis") ; eq(temporal_rec(FIRST_TIME)) of symptoms eq(op(LT), val("14"), temporal_unit(DAY))'

cond("thrombosis")
    .possible()
    .possible()
    .acute()
    .temporality(
        eq(temporal_rec(FIRST_TIME))
    )
    .temporality(
        eq(op(LT), val("14"), temporal_unit(DAY))
    )
