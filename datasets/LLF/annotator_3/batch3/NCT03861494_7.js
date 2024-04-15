'INC'

'-  one or more vascular risk factors ( HTN , DLP , current smoker , DM , obesity )'

'-  eq(val("one"), op(GTEQ)) cond("vascular") risk() criteria() ( cond("HTN") , cond("DLP") , eq(temporal_per(PRESENT)) obs("smoker") , cond("DM") , cond("obesity") )'

risk(
    cond("vascular")
)
    .equiv(
        criteria(
            cond("HTN"),
            cond("DLP"),
            obs("smoker")
                .temporality(
                    eq(temporal_per(PRESENT))
                ),
            cond("DM"),
            cond("obesity")
        )
            .min_count(
                eq(val("one"), op(GTEQ))
            )
    )

