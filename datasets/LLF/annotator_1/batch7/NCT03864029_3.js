'INC'

'-  KUVAN® was taken at least 1 dose to treat HPA caused by BH 4 deficiency during the period of observation .'

'-  drug("KUVAN") ® was eq(temporal_per(PAST)) eq(op(GTEQ), val("1")) to treat cond("HPA") caused by cond("BH 4 deficiency") during the period of observation .'

drug("KUVAN")
    .temporality(
        eq(temporal_per(PAST))
    )
    .min_count(
        eq(op(GTEQ), val("1"))
    )
    .for(
        cond("HPA")
            .caused_by(
                cond("BH 4 deficiency")
            )
    )