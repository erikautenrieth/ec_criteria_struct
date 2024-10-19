'INC'

'-  Participants\' eligibility : Participants will be adults age 21 and above that have been diagnosed with T 2D .'

'-  Participants\' eligibility : Participants will be adult() age() eq(val("21"), op(GTEQ)) that have been diagnosed with cond("T 2D") .'

intersect(
    adult(),
    age()
        .num_filter(
            eq(val("21"), op(GTEQ))
        ),
    cond("T 2D")
)
