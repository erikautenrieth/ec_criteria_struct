'INC'

'-  Age 18 - 70'

'-  age() eq(val("18"), op(BETWEEN), val("70"))'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("70"))
    )