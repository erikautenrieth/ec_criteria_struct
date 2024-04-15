'INC'

'Adults ( ages 18 - 65 ) , current service users , with severe and enduring mental ill - health , which , for clinical purposes , typically relates to diagnostic categories of bipolar disorder , severe depression , or schizophrenia .'

'adult() ( age() eq(val("18"), op(BETWEEN), val("65")) ) , current service users , with severity(SEVERE) and chronic() cond("mental ill - health") , which , for clinical purposes , typically relates to diagnostic categories of cond("bipolar disorder") , severity(SEVERE) cond("depression") , or cond("schizophrenia") .'

intersect(
    adult()
        .equiv(
            age()
                .num_filter(
                    eq(val("18"), op(BETWEEN), val("65"))
                )
        ),
    cond("mental ill - health")
        .severity(SEVERE)
        .chronic()
        .caused_by(
            union(
                cond("bipolar disorder"),
                cond("depression")
                    .severity(SEVERE),
                cond("schizophrenia")
            )
        )
)