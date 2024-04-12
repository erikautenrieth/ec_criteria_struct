'INC'

'-  between ages 18 - 65'

'-  eq(op(BETWEEN), val("18"), val("65"))'

age()
    .num_filter(
        eq(op(BETWEEN), val("18"), val("65"))
    )