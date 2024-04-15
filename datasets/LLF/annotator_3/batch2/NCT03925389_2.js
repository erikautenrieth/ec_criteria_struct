'INC'

'-  Patients eligible for external septorhinoplasty : patients seen in consultation because of nasal obstruction were evaluated .  Patients who had symptoms of nasal obstruction for at least 1 year that were the result of an identifiable anatomical cause such as septal deviation , turbinate hypertrophy , internal valve collapse , or external valve collapse were included in the study .'

'-  Patients eligible for external septorhinoplasty : patients seen in consultation because of cond("nasal obstruction") were possible() .  Patients who had possible() of cond("nasal obstruction") for eq(op(GTEQ), val("1"), temporal_unit(YEAR)) that were the result of an identifiable cond("anatomical cause") such as cond("septal deviation") , cond("turbinate hypertrophy") , cond("internal valve collapse") , or cond("external valve collapse") were included in the study .'

union(
    cond("nasal obstruction")
        .possible(),
    cond("nasal obstruction")
        .possible()
        .duration(
            eq(op(GTEQ), val("1"), temporal_unit(YEAR))
        )
        .caused_by(
            cond("anatomical cause")
                .equiv(
                    union(
                        cond("septal deviation"),
                        cond("turbinate hypertrophy"),
                        cond("internal valve collapse"),
                        cond("external valve collapse")
                    )
                )
        )
)