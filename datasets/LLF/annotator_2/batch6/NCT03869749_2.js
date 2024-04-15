'INC'

'-  an adolescent who is between 14 and 18 years of age'

'-  an child() who is eq(op(BETWEEN), val("14"), val("18"), temporal_unit(YEAR)) of age()'

intersect(
    child(),
    age()
        .num_filter(
            eq(op(BETWEEN), val("14"), val("18"), temporal_unit(YEAR))
        )
)