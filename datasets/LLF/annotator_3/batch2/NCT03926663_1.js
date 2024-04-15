'INC'

'-  Patients aged from 18 - 60 years'

'-  Patients age() from eq(val("18"), op(BETWEEN), val("60"), temporal_unit(YEAR))'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("60"), temporal_unit(YEAR))
    )