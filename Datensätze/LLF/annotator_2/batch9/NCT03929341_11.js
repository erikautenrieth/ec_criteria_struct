'EXC'

'-  Pregnancy ( status will be confirmed verbally .  For premenopausal patients who are unsure , status will be confirmed by completing a pregnancy strip test ) .'

'-  cond("Pregnancy") ( status will be confirmed verbally .  For cond("premenopausal") patients who are unsure , status eq(temporal_per(FUTURE)) by completing a lab("pregnancy strip test") ) .'

intersect(
    cond("Pregnancy"),
    if_then(
        cond("premenopausal"),
        lab("pregnancy strip test")
            .temporality(
                eq(temporal_per(FUTURE))
            )
    )
)