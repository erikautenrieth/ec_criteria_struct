'INC'

'3.  Episode of heartburn for 2 days or more during the last 7 days prior to randomization visit .'

'3.  Episode of cond("heartburn") for eq(val("2"), temporal_unit(DAY), op(GTEQ)) during the eq(temporal_per(PAST), val("7"), temporal_unit(DAY)) prior to study visit .'

cond("heartburn")
    .temporality(
        union(
            eq(val("2"), temporal_unit(DAY), op(GTEQ)),
            eq(temporal_per(PAST), val("7"), temporal_unit(DAY))
        )
    )