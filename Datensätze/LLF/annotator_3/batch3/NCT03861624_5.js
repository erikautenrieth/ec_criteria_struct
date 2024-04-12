'INC'

'5.  Presentation within 24 hours from injury'

'5.  Presentation eq(op(LTEQ), val("24"), temporal_unit(HOUR), obs("injury")) from obs("injury")'


obs("injury")
    .temporality(
        eq(op(LTEQ), val("24"), temporal_unit(HOUR))
    )