'INC'

'-  At least one lesion , not previously irradiated during the study screening period , that can be accurately measured at baseline according to RECIST 1.1.'

'-  eq(op(GTEQ), val("one")) obs("lesion") , neg() eq(temporal_per(PAST)) proc("irradiated") during the study screening period , that can be accurately measured at baseline according to RECIST 1.1.'

 intersect(
    obs("lesion")
        .min_count(
            eq(op(GTEQ), val("one"))
        ),
    neg(
        proc("irradiated")
            .temporality(
                eq(temporal_per(PAST))
            )
    )
 )