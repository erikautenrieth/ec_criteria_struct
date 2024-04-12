'INC'

'-  Patients aged from 15 to 50 years .'

'-  Patients age() from eq(val("15"), op(BETWEEN), val("50"), temporal_unit(YEAR)) .'

age()
    .num_filter(
        eq(val("15"), op(BETWEEN), val("50"), temporal_unit(YEAR))
    )