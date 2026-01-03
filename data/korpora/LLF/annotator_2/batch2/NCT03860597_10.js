'EXC'

'-  history of other significant medical illness ( e . g .  cancer , diabetes , heart disease , HIV , seizures ) for all subjects'

'-  eq(temporal_per(PAST)) of other severity(SEVERE) cond("medical illness") ( e . g .  cond("cancer") , cond("diabetes") , cond("heart disease") , cond("HIV") , cond("seizures") ) for all subjects'

cond("medical illness")
    .temporality(
        eq(temporal_per(PAST))
    )
    .severity(SEVERE)
    .equiv(
        cond("cancer"),
        cond("diabetes"),
        cond("heart disease"),
        cond("HIV"),
        cond("seizures")
    )