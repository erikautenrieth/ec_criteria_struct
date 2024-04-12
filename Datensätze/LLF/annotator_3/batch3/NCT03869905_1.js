'INC'

'-  Ulcerative colitis with confirmed diagnosis by histology and endoscopy AND in stable remission for 3 months or more without therapy or with a maintenance therapy ( except steroids and antibiotics for 3 months )'

'-  cond("Ulcerative colitis") with confirmed diagnosis by proc("histology") and proc("endoscopy") AND in stable() cond("remission") for eq(val("3"), temporal_unit(MONTH), op(GTEQ)) neg() proc("therapy") or with a proc("maintenance therapy") ( except() drug("steroids") and drug("antibiotics") for eq(val("3"), temporal_unit(MONTH)) )'


intersect(
    cond("Ulcerative colitis")
        .found_by(
            proc("histology"),
            proc("endoscopy")
        ),
    intersect(
        cond("remission")
            .stable()
            .duration(
                eq(val("3"), temporal_unit(MONTH), op(GTEQ))
            ),
        union(
            neg(
                proc("therapy")
            ),
            proc("maintenance therapy")
                .except(
                    drug("steroids"),
                    drug("antibiotics")
                )
                .duration(
                    eq(val("3"), temporal_unit(MONTH))
                )
        )
    )
)
