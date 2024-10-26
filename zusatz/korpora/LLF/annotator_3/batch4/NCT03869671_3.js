'INC'

'-  Self report of any high risk behaviors for HIV ( past - month receptive syringe sharing , transactional sex , condomless sex with an HIV - infected or unknown status partner )'

'-  Self report of any pol(HIGH) risk() for cond("HIV") ( eq(temporal_per(PAST), temporal_unit(MONTH)) mod("receptive") obs("syringe sharing") , obs("transactional sex") , obs("condomless sex") with an mod("HIV - infected") or mod("unknown status partner") )'

risk(
    cond("HIV")
)
    .pol(HIGH)
    .equiv(
        obs("syringe sharing")
            .num_filter(
                eq(temporal_per(PAST), temporal_unit(MONTH))
            )
            .mod("receptive"),
        obs("transactional sex"),
        obs("condomless sex")
            .mod("HIV - infected")
            .mod("unknown status partner")
    )
