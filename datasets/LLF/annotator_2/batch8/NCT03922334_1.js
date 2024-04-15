'INC'

'-  Pregnant ( any plurality ) delivering at or after 20 weeks of gestation OR postpartum ( during hospitalization ) , regardless of perinatal outcome'

'-  cond("Pregnant") ( any plurality ) delivering eq(op(GTEQ), val("20"), temporal_unit(WEEK)) of obs("gestation") OR cond("postpartum") ( during enc(INPATIENT) ) , regardless of perinatal outcome'

union(
    intersect(
        cond("Pregnant"),
        obs("gestation")
            .duration(
                eq(op(GTEQ), val("20"), temporal_unit(WEEK))
            )
    ),
    seq(
        cond("postpartum"),
        during(
            enc(INPATIENT)
        )
    )
)