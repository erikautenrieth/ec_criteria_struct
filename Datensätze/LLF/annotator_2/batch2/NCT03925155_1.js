'INC'

'-  Females aged 18 - 50 years'

'-  female() age() eq(val("18"), op(BETWEEN), val("50"), temporal_unit(YEAR))'

intersect(
    female(),
    age()
        .num_filter(
            eq(val("18"), op(BETWEEN), val("50"), temporal_unit(YEAR))
        )
)