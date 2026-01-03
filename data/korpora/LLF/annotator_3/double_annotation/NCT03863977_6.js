'EXC'

'-  age < 18 or > 60 ,'

'-  age() eq(op(LT), val("18")) or eq(op(GT), val("60")) ,'
age()
    .temporality(
        or(
            eq(op(LT), val("18")),
            eq(op(GT), val("60"))
        )
    )