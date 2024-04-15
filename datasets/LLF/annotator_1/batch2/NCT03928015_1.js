'INC'

'1.  Male or female , 18 years to 65 years old ( inclusive )'

'1.  male() or female() , eq(val("18"), temporal_unit(YEAR), op(BETWEEN), val("65"), temporal_unit(YEAR)) age() ( inclusive )'

intersect(
    union(
        male(), 
        female()
    ), 
    age()
        .num_filter(
            eq(val("18"), temporal_unit(YEAR), op(BETWEEN), val("65"), temporal_unit(YEAR))
        )
)