'INC'

'-  18 - 65 years old ( to avoid outcomes being affected by aging )'

'-  eq(val("18"), op(BETWEEN), val("65"), temporal_unit(YEAR)) age() ( to avoid outcomes being affected by aging )'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("65"), temporal_unit(YEAR))
    )
