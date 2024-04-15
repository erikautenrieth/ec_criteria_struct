'EXC'

'-  Patients who received immunosuppressive agent within the past 1 year'

'-  Patients who eq(temporal_per(PAST)) drug("immunosuppressive agent") eq(op(LTEQ), temporal_per(PAST), val("1"), temporal_unit(YEAR))'

drug("immunosuppressive agent")
    .temporality(
        eq(temporal_per(PAST))
    )
    .temporality(
        eq(op(LTEQ), temporal_per(PAST), val("1"), temporal_unit(YEAR))
    )