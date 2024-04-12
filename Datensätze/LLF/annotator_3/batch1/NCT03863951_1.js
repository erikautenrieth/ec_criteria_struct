'INC'

'-  diagnosed with the first ever acute ischemic stroke occurring within 2 weeks and were confirmed by CT or MRI ,'

'-  diagnosed with the eq(temporal_rec(FIRST_TIME)) acute() mod("ischemic") cond("stroke") occurring eq(op(LTEQ), val("2"), temporal_unit(WEEK)) and were confirmed by proc("CT") or proc("MRI") ,'


cond("stroke")
    .temporality(
        eq(temporal_rec(FIRST_TIME))
    )
    .acute()
    .mod("ischemic")
    .temporality(
        eq(op(LTEQ), val("2"), temporal_unit(WEEK))
    )
    .found_by(
        union(
            proc("CT"),
            proc("MRI")
        )
    )