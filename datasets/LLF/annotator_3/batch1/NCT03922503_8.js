'INC'

'-  Patients age between 25 and 50 years old .'

'-  Patients age() eq(op(BETWEEN), val("25"), val("50"), temporal_unit(MONTH)) old .'

age()
    .num_filter(
        eq(op(BETWEEN), val("25"), val("50"), temporal_unit(MONTH))
    )
