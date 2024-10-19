'INC'

'-  All birth between 24 + 0 weeks of amenorrhea and 36 + 6 weeks of amenorrhea'

'-  All birth() eq(op(BETWEEN), val("24"), val("0"), temporal_unit(WEEK)) of cond("amenorrhea") and eq(val("36"), val("6"), temporal_unit(WEEK)) of cond("amenorrhea")'

seq(
    birth(),
    during(
        cond("amenorrhea")
            .temporality(
                and(
                    eq(op(BETWEEN), val("24"), val("0"), temporal_unit(WEEK), cond("amenorrhea")),
                    eq(val("36"), val("6"), temporal_unit(WEEK), cond("amenorrhea"))
                )
            )
    )
)