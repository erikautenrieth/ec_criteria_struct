'EXC'

'-  Pregnant women , breastfeeding and younger than 18 years'

'-  cond("Pregnant") female() , cond("breastfeeding") and eq(op(LT), val("18"), temporal_unit(YEAR))'

union(
    intersect(
        cond("Pregnant"),
        female(),
    ),
    cond("breastfeeding"),
    age()
        .num_filter(
            eq(op(LT), val("18"), temporal_unit(YEAR))
        )
)

