'INC'

'Patients meet at least three out of the following six conditions : -  Any gender aged 50 years or above ; -  Have less than 30 mins of morning stiffness ; -  Crepitus on active motion ; -  Bony tenderness ; -  Bony enlargement ; -  No palpable warmth .'

'Patients meet eq(op(GTEQ), val("three")) of the following eq(val("six")) criteria() conditions : -  Any gender age() eq(val("50"), temporal_unit(YEAR), op(GTEQ)) ; -  Have eq(op(LT), val("30"), temporal_unit(MINUTE)) of obs("morning stiffness") ; -  cond("Crepitus on active motion") ; -  cond("Bony tenderness") ; -  cond("Bony enlargement") ; -  neg() cond("palpable warmth") .'

criteria(
    age()
        .num_filter(
            eq(val("50"), temporal_unit(YEAR), op(GTEQ))
        ),
    obs("morning stiffness")
        .num_filter(
            eq(op(LT), val("30"), temporal_unit(MINUTE))
        ),
    cond("Crepitus on active motion"),
    cond("Bony tenderness"),
    cond("Bony enlargement"),
    neg(
        cond("palpable warmth")
    )
)
    .min_count(
        eq(op(GTEQ), val("three"))
    )
    .num_filter(
        eq(val("six"))
    )
