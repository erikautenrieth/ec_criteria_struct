'INC'

'-  Pregnant women who have resided in Huizhou for at least 3 years ;'

'-  cond("Pregnant") female() who have obs("resided") in loc(res("Huizhou")) for eq(op(GTEQ), val("3"), temporal_unit(YEAR)) ;'

intersect(
    cond("Pregnant"),
    female(),
    obs("resided")
        .loc(res("Huizhou"))
        .duration(
            eq(op(GTEQ), val("3"), temporal_unit(YEAR))
        )
)