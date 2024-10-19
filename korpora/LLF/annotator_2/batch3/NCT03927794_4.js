'INC'

'-  Patients aged between 3 - 5 years .'

'-  Patients age() eq(op(BETWEEN), val("3"), val("5"), temporal_unit(YEAR)) .'

age()
    .num_filter(
        eq(op(BETWEEN), val("3"), val("5"), temporal_unit(YEAR))
    )