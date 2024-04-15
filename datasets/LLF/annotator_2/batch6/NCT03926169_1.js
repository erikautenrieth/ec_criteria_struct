'INC'

'-  Participant with moderate to severe Hidradenitis Suppurativa ( HS ) for at least one year prior to Baseline visit .'

'-  Participant with severity(MODERATE) to severity(SEVERE) cond("Hidradenitis Suppurativa") ( cond("HS") ) for eq(op(GTEQ), val("one"), temporal_unit(YEAR)) prior to Baseline visit .'

cond("Hidradenitis Suppurativa")
    .severity(MODERATE)
    .severity(SEVERE)
    .equiv(
        cond("HS")
    )
    .duration(
        eq(op(GTEQ), val("one"), temporal_unit(YEAR))
    )