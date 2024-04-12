'EXC'

'4.  Sustained severe Traumatic Brain Injury ( GCS < 12 ) * * *'

'4.  Sustained severity(SEVERE) obs("Traumatic Brain Injury") ( clin_score("GCS") eq(op(LT), val("12")) ) * * *'

obs("Traumatic Brain Injury")
    .severity(SEVERE)
    .equiv(
        clin_score("GCS")
            .num_filter(
                eq(op(LT), val("12"))
            )
    )