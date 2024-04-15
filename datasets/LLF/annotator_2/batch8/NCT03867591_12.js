'EXC'

'-  Severe heartburn problem ( cannot be ignored and often limits your concentration on daily activities ) during the last week'

'-  severity(SEVERE) cond("heartburn problem") ( cannot be ignored and often limits your concentration on daily activities ) during the eq(temporal_per(PAST), temporal_unit(WEEK))'

cond("heartburn problem")
    .severity(SEVERE)
    .temporality(
        eq(temporal_per(PAST), temporal_unit(WEEK))
    )