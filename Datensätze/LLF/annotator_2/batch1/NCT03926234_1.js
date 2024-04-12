'INC'

'-  Patients , older than 14 years and admitted to the ED , were eligible for this study .'

'-  Patients , eq(op(GT), val("14"), temporal_unit(YEAR)) and enc(EMERGENCY) to the loc(unit("ED")) , were eligible for this study .'

intersect(
    age()
        .num_filter(
            eq(op(GT), val("14"), temporal_unit(YEAR))
        ),
    enc(EMERGENCY)
        .loc(unit("ED"))
)