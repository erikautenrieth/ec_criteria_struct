'EXC'

'-  Patient with medical history of psychiatry ( mental harm ) , hearing problem , cognitive and behavioural impairment ( claustrophobia ) , sensory disabilities ,'

'-  Patient with medical eq(temporal_per(PAST)) of proc("psychiatry") ( cond("mental harm") ) , cond("hearing problem") , mod("cognitive") and mod("behavioural") cond("impairment") ( cond("claustrophobia") ) , cond("sensory disabilities") ,'

union(
    proc("psychiatry")
        .equiv(
            cond("mental harm")
        ),
    cond("hearing problem"),
    cond("impairment")
        .mod("cognitive")
        .mod("behavioural"),
    cond("claustrophobia"),
    cond("sensory disabilities")
)
    .temporality(
        eq(temporal_per(PAST))
    )