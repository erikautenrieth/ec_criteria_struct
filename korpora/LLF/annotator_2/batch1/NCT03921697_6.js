'EXC'

'-  Presence of psychiatric diseases ( episode or any form of psychosis , diagnosed by a psychiatrist in the last year ) .'

'-  Presence of cond("psychiatric diseases") ( episode or any form of cond("psychosis") , diagnosed by a prov("psychiatrist") in the eq(temporal_per(PAST), temporal_unit(YEAR)) ) .'

cond("psychiatric diseases")
    .equiv(
        cond("psychosis")
    )
    .prov("psychiatrist")
    .temporality(
        eq(temporal_per(PAST), temporal_unit(YEAR))
    )