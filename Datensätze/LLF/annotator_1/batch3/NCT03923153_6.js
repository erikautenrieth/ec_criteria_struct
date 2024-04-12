'EXC'

'-  Patients under the age of 18'

'-  Patients eq(op(LT), val("18"))'

age()
    .num_filter(
        eq(op(LT), val("18"))
    )