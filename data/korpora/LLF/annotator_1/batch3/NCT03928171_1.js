'INC'

'-  Adults ( ≥ 18 years old )'

'-  adult() ( eq(op(GTEQ), val("18"), temporal_unit(YEAR)) age() )'

adult()
    .equiv(
        age()
            .num_filter(
                eq(op(GTEQ), val("18"), temporal_unit(YEAR))
            )
    )