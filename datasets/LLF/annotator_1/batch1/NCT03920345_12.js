'EXC'

'-  Systemic neurological disorders with mobility limitations ( e . g .  advanced Parkinson\'s disease or multiple sclerosis )'

'-  mod("Systemic") cond("neurological disorders") with cond("mobility limitations") ( e . g .  severity(SEVERE) cond("Parkinson\'s disease") or cond("multiple sclerosis") )'

intersect(
    cond("neurological disorders")
        .mod("Systemic"), 
    cond("mobility limitations")
        .equiv(
            cond("Parkinson's disease")
                .severity(SEVERE),
            cond("multiple sclerosis")
        )
)