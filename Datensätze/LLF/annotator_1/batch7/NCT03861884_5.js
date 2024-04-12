'EXC'

'2.  Not speaking English before age 5 years .'

'2.  neg() speaking lang("English") before age() eq(val("5"), temporal_unit(YEAR)) .'

neg(
    seq(
        lang("English"),
        before(
            age()
                .num_filter(
                    eq(val("5"), temporal_unit(YEAR))
                )
        )
    )
)