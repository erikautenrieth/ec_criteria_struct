'EXC'

'-  Presence of contraindications to ketamine , including refractory hypertension , severe cardiovascular disease ( heart function classification ≥ III ) , or hyperthyroidism;'

'-  Presence of contraindication() to drug("ketamine") , including mod("refractory") cond("hypertension") , severity(SEVERE) cond("cardiovascular disease") ( clin_score("heart function classification") eq(op(GTEQ), val("III")) ) , or cond("hyperthyroidism") ;'

contraindication(
    drug("ketamine")
)
.equiv(
    cond("hypertension")
        .mod("refractory"),
    cond("cardiovascular disease")
        .severity(SEVERE)
        .equiv(
            clin_score("heart function classification")
                .num_filter(
                    eq(op(GTEQ), val("III"))
                )
        ),
    cond("hyperthyroidism")
)