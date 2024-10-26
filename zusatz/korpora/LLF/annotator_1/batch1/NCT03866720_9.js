'EXC'

'-  Any diagnosed metabolic disease ( e . g .  type 1 or type 2 diabetes )'

'-  Any diagnosed cond("metabolic disease") ( e . g .  mod("type 1") or mod("type 2") cond("diabetes") )'

cond("metabolic disease")
    .equiv(
        cond("diabetes")
            .mod("type 1")
            .mod("type 2")
    )