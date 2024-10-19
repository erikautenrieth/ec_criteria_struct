'INC'

'-  : knee OA with obesity ; sedentary with no previous education ; ability to understand and follow commands ; and ability to walk independently .'

'-  : mod("knee") cond("OA") with cond("obesity") ; obs("sedentary") with neg() eq(temporal_per(PAST)) obs("education") ; ability to understand and follow commands ; and cond("ability to walk") independently .'

intersect(
    intersect(
        cond("OA")
            .mod("knee"),
        cond("obesity")
    ),
    intersect(
        obs("sedentary"),
        neg(
            obs("education")
                .temporality(
                    eq(temporal_per(PAST))
                )
        )
    ),
    cond("ability to walk")
)