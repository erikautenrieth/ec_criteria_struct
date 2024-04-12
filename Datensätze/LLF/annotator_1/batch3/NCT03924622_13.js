'EXC'

'-  Current skin condition ( e . g . , eczema or psoriasis )'

'-  eq(temporal_per(PRESENT)) cond("skin condition") ( e . g . , cond("eczema") or cond("psoriasis") )'

cond("skin condition")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .equiv(
        cond("eczema"), 
        cond("psoriasis")
    )