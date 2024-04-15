'INC'

'-  Participants were eligible for inclusion in the study if they had evidence suggesting acute ischemic stroke that lasted for ≤ 4.5 hours .'

'-  Participants were eligible for inclusion in the study if they had evidence possible() acute() cond("ischemic stroke") that lasted for eq(op(LTEQ), val("4.5"), temporal_unit(HOUR)) .'

cond("ischemic stroke")
    .possible()
    .acute()
    .duration(
        eq(op(LTEQ), val("4.5"), temporal_unit(HOUR))
    )
