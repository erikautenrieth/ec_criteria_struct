'EXC'

'-  Presence of contraindications for the laser treatment or topical steroid treatment'

'-  Presence of contraindication() for the proc("laser treatment") or drug("topical steroid") proc()'

contraindication(
    proc("laser treatment"),
    proc()
        .equiv(
            drug("topical steroid")
        )
)