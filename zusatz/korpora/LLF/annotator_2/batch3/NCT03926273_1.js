'INC'

'-  All participants were included if their age more than or equal to 18 years .  Body mass index < 30 kg / m 2 , total cholesterol < 200 mg / dl , serum triglycerides < 200 mg / dl and random blood glucose level < 126 mg / dl .'

'-  All participants were included if their age() eq(op(GTEQ), val("18"), temporal_unit(YEAR)) .  vital("Body mass index") eq(op(LT), val("30"), unit("kg"), unit("m 2")) , lab("total cholesterol") eq(op(LT), val("200"), unit("mg"), unit("dl")) , lab("serum triglycerides") eq(op(LT), val("200"), unit("mg"), unit("dl")) and mod("random") lab("blood glucose level") eq(op(LT), val("126"), unit("mg"), unit("dl")) .'

intersect(
    age()
        .num_filter(
            eq(op(GTEQ), val("18"), temporal_unit(YEAR))
        ),
    vital("Body mass index")
        .num_filter(
            eq(op(LT), val("30"), unit("kg"), unit("m 2"))
        ),
    lab("total cholesterol")
        .num_filter(
            eq(op(LT), val("200"), unit("mg"), unit("dl"))
        ),
    lab("serum triglycerides")
        .num_filter(
            eq(op(LT), val("200"), unit("mg"), unit("dl"))
        ),
    lab("blood glucose level")
        .mod("random")
        .num_filter(
            eq(op(LT), val("126"), unit("mg"), unit("dl"))
        )
)