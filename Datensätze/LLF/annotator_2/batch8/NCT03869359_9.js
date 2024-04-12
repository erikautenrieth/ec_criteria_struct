'EXC'

'-  usage of antibiotics within 4 weeks before inclusion'

'-  usage of drug("antibiotics") eq(op(LTEQ), val("4"), temporal_unit(WEEK)) before inclusion'

drug("antibiotics")
    .temporality(
        eq(op(LTEQ), val("4"), temporal_unit(WEEK))
    )