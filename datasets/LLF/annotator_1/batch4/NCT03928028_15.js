'EXC'

'1.  Adolescent outside age range'

'1.  child() neg() age() eq(unit(REF_RANGE_HIGH))'

intersect(
    child(), 
    neg(
        age()
            .num_filter(
                eq(unit(REF_RANGE_HIGH))
            )
    )
)