'INC'

'-  Patients with hypertension and taking antihypertensive drugs more than 1 year'

'-  Patients with cond("hypertension") and eq(temporal_per(PRESENT)) drug("antihypertensive drugs") eq(op(GT), val("1"), temporal_unit(YEAR))'

intersect(
    cond("hypertension")
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    drug("antihypertensive drugs")
        .duration(
            eq(op(GT), val("1"), temporal_unit(YEAR))
        )
)