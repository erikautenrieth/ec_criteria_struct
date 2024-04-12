'EXC'

'8.  Participation in another clinical research study with an investigational drug within 4 weeks before this study'

'8.  Participation in other clinical research study with an investigational drug() eq(op(LTEQ), val("4"), temporal_unit(WEEK)) before this study'

drug()
    .temporality(
        eq(op(LTEQ), val("4"), temporal_unit(WEEK))
    )