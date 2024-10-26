'INC'

'-  age > 18 .'

'-  age() eq(op(GT), val("18")) .'

age()
    .num_filter(
        eq(op(GT), val("18"))
    )