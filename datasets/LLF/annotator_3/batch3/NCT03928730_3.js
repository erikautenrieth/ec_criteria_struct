'EXC'

'-  Any other swellings that were caused by trauma and / or fracture , extended below the neck or patient reluctant to undergo US were excluded from the study .'

'-  Any other cond("swellings") that were caused by obs("trauma") and / or cond("fracture") , mod("extended below the neck") or patient reluctant to undergo US were excluded from the study .'

cond("swellings")
    .caused_by(
        union(
            obs("trauma"),
            cond("fracture"),
        )
            .mod("extended below the neck")
    )
