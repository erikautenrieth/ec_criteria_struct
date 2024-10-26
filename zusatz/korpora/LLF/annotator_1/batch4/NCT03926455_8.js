'EXC'

'-  Known history of Typhoid infection in the previous 6 months'

'-  Known eq(temporal_per(PAST)) of cond("Typhoid infection") in the eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))'

cond("Typhoid infection")
    .temporality(
        eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))
    )