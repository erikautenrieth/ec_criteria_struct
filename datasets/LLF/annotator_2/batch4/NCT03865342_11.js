'EXC'

'-  Enrollment in a structured weight - loss program currently or within the 1 month preceding study enrollment'

'-  Enrollment in a structured proc("weight - loss program") eq(temporal_per(PRESENT)) or eq(op(LTEQ), val("1"), temporal_unit(MONTH)) preceding study enrollment'


proc("weight - loss program")
    .temporality(
        or(
            eq(temporal_per(PRESENT)),
            eq(op(LTEQ), val("1"), temporal_unit(MONTH))
        )
    )