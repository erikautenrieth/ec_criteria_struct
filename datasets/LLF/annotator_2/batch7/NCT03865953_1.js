'INC'

'1.  Clinical diagnosis of post herpetic neuralgia , with pain persisting for at least 3 months after the onset of herpes zoster rash'

'1.  Clinical diagnosis of cond("post herpetic neuralgia") , with obs("pain") persisting for eq(op(GTEQ), val("3"), temporal_unit(MONTH)) after the eq(temporal_rec(FIRST_TIME)) of cond("herpes zoster rash")'

seq(
    intersect(
        cond("post herpetic neuralgia"),
        obs("pain")
    )
        .duration(
            eq(op(GTEQ), val("3"), temporal_unit(MONTH))
        ),
    after(
        cond("herpes zoster rash")
            .temporality(
                eq(temporal_rec(FIRST_TIME))
            )
    )
)