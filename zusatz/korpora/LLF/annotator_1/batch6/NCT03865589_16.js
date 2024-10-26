'EXC'

'-  Any patient who has contraindication to US SWE ( e . g .  unable to hold still )'

'-  Any patient who has contraindication() to proc("US SWE") ( e . g .  cond("unable to hold still") )'

contraindication(
    proc("US SWE")
)
.equiv(
    cond("unable to hold still")
)