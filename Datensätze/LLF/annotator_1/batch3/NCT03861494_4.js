'INC'

'-  admitted to hospital Sunday through Thursday'

'-  enc(INPATIENT) to loc(hosp("hospital")) eq(val("Sunday"), op(BETWEEN), val("Thursday"))'

enc(INPATIENT)
    .loc(hosp("hospital"))
    .temporality(
        eq(val("Sunday"), op(BETWEEN), val("Thursday"))
    )