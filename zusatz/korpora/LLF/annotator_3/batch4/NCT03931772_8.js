'EXC'

'-  Severe psychiatric or structural brain disease ( i . e .  psychosis , stroke with functional impairment , dementia ) or [ current / recent risk to self .  Indicated by denial of question pertaining to inpatient hospitalization'

'-  severity(SEVERE) mod("psychiatric") or mod("structural") cond("brain disease") ( i . e .  cond("psychosis") , cond("stroke") with cond("functional impairment") , cond("dementia") ) or [ eq(temporal_per(PRESENT)) / eq(temporal_per(RECENT)) cond("risk to self") .  Indicated by denial of question pertaining to hospitalization'

cond("brain disease")
    .severity(SEVERE)
    .mod("psychiatric")
    .mod("structural")
    .equiv(
        cond("psychosis"),
        intersect(
            cond("stroke"),
            cond("functional impairment"),
        ),
        cond("dementia"),
        cond("risk to self")
            .temporality(
                or(
                    eq(temporal_per(PRESENT)),
                    eq(temporal_per(RECENT))
                )
            )
    )