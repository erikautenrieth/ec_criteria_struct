'INC'

'-  Children : 6 to 9 years old children .  Teeth : tooth requiring dental treatment'

'-  child() : eq(val("6"), op(BETWEEN), val("9"), temporal_unit(YEAR)) age() child() .  Teeth : tooth indication() proc("dental treatment")'

intersect(
    child(),
    age()
        .num_filter(
            eq(val("6"), op(BETWEEN), val("9"), temporal_unit(YEAR))
        ),
    indication(
        proc("dental treatment")
    )
)