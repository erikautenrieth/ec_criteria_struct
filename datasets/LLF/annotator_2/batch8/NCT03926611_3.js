'INC'

'-  Presence of itch and hives for ≥ 6 consecutive weeks prior to screening in spite of use of non - sedating H 1 - antihistamines according to local Treatment guidelines during this time period'

'-  Presence of cond("itch") and cond("hives") for eq(op(GTEQ), val("6"), temporal_unit(WEEK)) prior to screening in spite of use of mod("non - sedating") drug("H 1 - antihistamines") according to local Treatment guidelines during this time period'

intersect(
    intersect(
        cond("itch"),
        cond("hives")
    ),
    drug("H 1 - antihistamines")
        .mod("non - sedating")
)
    .temporality(
        eq(op(GTEQ), val("6"), temporal_unit(WEEK))
    )