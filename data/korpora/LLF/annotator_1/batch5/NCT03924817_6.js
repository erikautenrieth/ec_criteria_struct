'EXC'

'-  Patients with central sleep apnea ( central AI > 5 / hour )'

'-  Patients with cond("central sleep apnea") ( obs("central AI") eq(op(GT), val("5"), temporal_unit(HOUR)) )'

cond("central sleep apnea")
    .equiv(
        obs("central AI")
            .num_filter(
                eq(op(GT), val("5"), temporal_unit(HOUR))
            )
    )