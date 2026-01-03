'INC'

'-  Collaborative ICU patients with length of stay > 48 h'

'-  Collaborative loc(unit("ICU")) patients with length of enc(INPATIENT) eq(op(GT), val("48"), temporal_unit(HOUR))'

enc(INPATIENT)
    .loc(unit("ICU"))
    .temporality(
        eq(op(GT), val("48"), temporal_unit(HOUR))
    )