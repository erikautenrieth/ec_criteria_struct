'INC'

'-  Triglycerides > 150 mg / dL OR HDL < 50 in females , < 40 mg / dL in males'

'-  lab("Triglycerides") eq(op(GT), val("150"), unit("mg"), unit("dL")) OR lab("HDL") eq(op(LT), val("50")) in female() , eq(op(LT), val("40"), unit("mg"), unit("dL")) in male()'

intersect(
    lab("Triglycerides")
        .num_filter(
            eq(op(GT), val("150"), unit("mg"), unit("dL"))
        ),
    if_then(
        female(),
        lab("HDL")
            .num_filter(
                eq(op(LT), val("50"))
            )
    ),
    if_then(
        male(),
        lab("HDL")
            .num_filter(
                eq(op(LT), val("40"), unit("mg"), unit("dL"))
            )
    )
)