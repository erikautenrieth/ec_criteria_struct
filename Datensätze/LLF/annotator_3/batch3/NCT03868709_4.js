'INC'

'4.  Identified at high risk of PPCs according to the ARISCAT risk score ( ARISCAT predictive score ≥ 45 ) .'

'4.  Identified at pol(HIGH) risk() of cond("PPCs") according to the clin_score("ARISCAT risk score") ( clin_score("ARISCAT predictive score") eq(op(GTEQ), val("45")) ) .'

risk(
    cond("PPCs")
)
    .pol(HIGH)
    .equiv(
        clin_score("ARISCAT risk score")
            .equiv(
                clin_score("ARISCAT predictive score")
                    .num_filter(
                        eq(op(GTEQ), val("45"))
                    )
            )
    )