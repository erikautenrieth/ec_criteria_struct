'EXC'

'-  Patient with a contraindication to performing a fMRI scan : ferromagnetic implant in the body , piercing , claustrophobia , unable to remain in the scanner stationary for 40 minutes'

'-  Patient with a contraindication() to performing a proc("fMRI scan") : proc("ferromagnetic implant") in the body , cond("piercing") , cond("claustrophobia") , cond("unable to remain in the scanner stationary") for eq(val("40"), temporal_unit(MINUTE))'

contraindication(
    proc("fMRI scan")
)
.equiv(
    proc("ferromagnetic implant"),
    cond("piercing"),
    cond("claustrophobia"),
    cond("unable to remain in the scanner stationary")
        .duration(
            eq(val("40"), temporal_unit(MINUTE))
        )
)