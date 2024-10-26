'EXC'

'-  High - risk varices needing interventional treatment ( endoscopy , TIPS )'

'-  pol(HIGH) - risk() cond("varices") indication() proc("interventional treatment") ( proc("endoscopy") , proc("TIPS") )'

intersect(
    risk(
        cond("varices")
    )
        .pol(HIGH),
    indication(
        proc("interventional treatment")
    )
        .equiv(
            proc("endoscopy"),
            proc("TIPS")
        )
)
