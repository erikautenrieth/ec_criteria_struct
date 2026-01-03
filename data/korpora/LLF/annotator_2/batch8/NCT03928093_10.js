'EXC'

'-  Pregabalin use within 2 weeks before study enrolment'

'-  drug("Pregabalin") use eq(op(LTEQ), val("2"), temporal_unit(WEEK)) before study enrolment'

drug("Pregabalin")
    .temporality(
        eq(op(LTEQ), val("2"), temporal_unit(WEEK))
    )