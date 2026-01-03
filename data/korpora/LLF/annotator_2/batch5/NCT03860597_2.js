'INC'

'-  ages 18 - 50 for all subjects'

'-  age() eq(val("18"), op(BETWEEN), val("50")) for all subjects'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("50"))
    )