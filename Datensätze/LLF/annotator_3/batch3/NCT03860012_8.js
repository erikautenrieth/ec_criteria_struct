'EXC'

'2.  age > 21 or less than 2'

'2.  age() eq(op(GT), val("21")) or eq(op(LT), val("2"))'

age()
    .num_filter(
        or(
            eq(op(GT), val("21")),
            eq(op(LT), val("2"))
        )
    )