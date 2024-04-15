'INC'

'-  Subjects with a minimum of 1 and a maximum of 12 primary anterior teeth with early carious lesions Class V of ICDAS score 1 - 2 .'

'-  Subjects with a eq(val("1"), val("12")) mod("primary anterior teeth") with mod("early") cond("carious lesions") eq(unit("Class"), val("V")) of clin_score("ICDAS score") eq(val("1"), op(BETWEEN), val("2")) .'

intersect(
    cond("carious lesions")
        .num_filter(
            eq(val("1"), val("12"))
        )
        .mod("primary anterior teeth")
        .mod("early"),
    clin_score("ICDAS score")
        .num_filter(
            and(
                eq(unit("Class"), val("V")),
                eq(val("1"), op(BETWEEN), val("2"))
            )
        )

)