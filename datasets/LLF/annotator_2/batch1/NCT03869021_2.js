'INC'

'2.  Patients younger than 25 years old .'

'2.  Patients eq(op(LT), val("25"), temporal_unit(YEAR)) age() .'

age()
    .num_filter(
        eq(op(LT), val("25"), temporal_unit(YEAR))
    )