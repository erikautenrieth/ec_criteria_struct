'INC'

'-  Older adults ( ≥ 65 years )'

'-  Older adult() ( eq(op(GTEQ), val("65"), temporal_unit(YEAR)) )'

adult()
    .equiv(
        age()
            .num_filter(
                eq(op(GTEQ), val("65"), temporal_unit(YEAR))
            )
    )