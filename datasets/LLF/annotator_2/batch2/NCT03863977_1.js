'INC'

'-  Patients\' age from 18 to 60 years old ,'

'-  Patients\' age() from eq(val("18"), op(BETWEEN), val("60"), temporal_unit(YEAR)) old ,'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("60"), temporal_unit(YEAR))
    )