'INC'

'-  Spent more than 4 days in the ICU ,'

'-  enc(INPATIENT) eq(op(GT), val("4"), temporal_unit(DAY)) in the loc(unit("ICU")) ,'

enc(INPATIENT)
    .duration(
        eq(op(GT), val("4"), temporal_unit(DAY))
    )
    .loc(unit("ICU"))