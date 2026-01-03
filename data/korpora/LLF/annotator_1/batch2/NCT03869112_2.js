'INC'

'-  Male or Female , aged 40 years to 85 years .'

'-  male() or female() , age() eq(val("40"), temporal_unit(YEAR), op(BETWEEN), val("85"), temporal_unit(YEAR)) .'

intersect(
    union(
        male(), 
        female()
    ), 
    age()
        .num_filter(
            eq(val("40"), temporal_unit(YEAR), op(BETWEEN), val("85"), temporal_unit(YEAR))
        )
)