'EXC'

'-  Presence of osteomyelitis of poor surgical candidates due to comorbidities such as diabetics with an HbA 1c of > 8 %'

'-  Presence of cond("osteomyelitis") of poor surgical candidates due to cond() such as cond("diabetics") with an lab("HbA 1c") of eq(op(GT), val("8"), unit("%"))'

cond("osteomyelitis")
    .caused_by(
        cond()
            .equiv(
                intersect(
                    cond("diabetics"),
                    lab("HbA 1c")
                        .num_filter(
                            eq(op(GT), val("8"), unit("%"))
                        )
                )
            )
    )
    