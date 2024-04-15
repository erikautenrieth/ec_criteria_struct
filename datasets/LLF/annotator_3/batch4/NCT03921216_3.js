'EXC'

'-  Active infection that increases the risk of secondary infection in the skin where the vesicles containing interstitial fluid have been emptied of interstitial fluid with a fine needle and the bladder roof is intact .'

'-  eq(temporal_per(PRESENT)) cond("infection") that pol(HIGH) the risk() of mod("secondary") cond("infection") in the mod("skin") where the obs("vesicles containing interstitial fluid") have been mod("emptied of interstitial fluid") with a proc("fine needle") and the obs("bladder roof") is pol(NORMAL) .'

intersect(
    risk(
        cond("infection")
            .mod("secondary")
            .mod("skin")
    )
        .pol(HIGH)
        .caused_by(
            cond("infection")
                .temporality(
                    eq(temporal_per(PRESENT))
                )
        ),
    obs("vesicles containing interstitial fluid")
        .mod("emptied of interstitial fluid"),
    proc("fine needle"),
    obs("bladder roof")
        .pol(NORMAL)
)