'INC'

'-  For EMR review all adults admitted to the hospital ages 18 and older with research authorization'

'-  For EMR review all adult() enc(INPATIENT) to the loc(hosp("hospital")) age() eq(val("18"), op(GTEQ)) with research authorization'

intersect(
    adult(),
    enc(INPATIENT)
        .loc(hosp("hospital")),
    age()
        .num_filter(
            eq(val("18"), op(GTEQ))
        )
)