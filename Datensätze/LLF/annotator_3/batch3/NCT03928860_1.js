'INC'

'-  Patients with at least 3 months of clinical onset of peripheral vascular disease'

'-  Patients with eq(op(LTEQ), val("3"), temporal_unit(MONTH)) of clinical eq(temporal_rec(FIRST_TIME)) of cond("peripheral vascular disease")'

cond("peripheral vascular disease")
    .duration(
        eq(op(LTEQ), val("3"), temporal_unit(MONTH))
    )
    .temporality(
        eq(temporal_rec(FIRST_TIME))
    )