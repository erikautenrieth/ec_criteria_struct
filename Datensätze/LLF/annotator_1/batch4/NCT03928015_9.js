'EXC'

'3.  Patients who have received or are expected to receive neuraxial / locoregional blocks for pain within the next 48 hours'

'3.  Patients who have eq(temporal_per(PAST)) or are expected to receive mod("neuraxial") / mod("locoregional") proc("blocks") for obs("pain") eq(op(LTEQ), temporal_per(FUTURE), val("48"), temporal_unit(HOUR))'

proc("blocks")
    .mod("neuraxial")
    .mod("locoregional")
    .temporality(
        or(
            eq(temporal_per(PAST)),
            eq(op(LTEQ), temporal_per(FUTURE), val("48"), temporal_unit(HOUR))
        )
    )
    .for(
        obs("pain")
    )