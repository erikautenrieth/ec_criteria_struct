'INC'

'Key Criteria for Healthy Volunteers : Subject must be between the ages of 18 and 55 years ;'

'Key Criteria for cond("Healthy") Volunteers : Subject must be eq(op(BETWEEN), val("18"), val("55"), temporal_unit(YEAR)) ;'

intersect(
    cond("Healthy"),
    age()
        .num_filter()(
            eq(op(BETWEEN), val("18"), val("55"), temporal_unit(YEAR))
        )
)

    