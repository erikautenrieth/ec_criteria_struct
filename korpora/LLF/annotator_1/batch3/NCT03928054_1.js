'INC'

'-  Patients with both sexes from 40 to 80 years old'

'-  Patients with both sexes from eq(val("40"), op(BETWEEN), val("80"), temporal_unit(YEAR)) age()'

age()
    .num_filter(
        eq(val("40"), op(BETWEEN), val("80"), temporal_unit(YEAR))
    )