'INC'

'-  Male or female > 18 and < 60 years of age , Body Mass Index ( BMI ) < 40.'

'-  male() or female() eq(op(GT), val("18")) and eq(op(LT), val("60"), temporal_unit(YEAR)) of age() , vital("Body Mass Index") ( vital("BMI") ) eq(op(LT), val("40")).'

intersect(
    union(
        male(),
        female()
    ), 
    age()
        .num_filter(
            and(
                eq(op(GT), val("18"), temporal_unit(YEAR)), 
                eq(op(LT), val("60"), temporal_unit(YEAR))
            )
        ), 
    vital("Body Mass Index")
        .equiv(
            vital("Body Mass Index")
        )
        .num_filter(
            eq(op(LT), val("40"))
        )
)