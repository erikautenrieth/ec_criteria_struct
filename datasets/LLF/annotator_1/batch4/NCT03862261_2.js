'INC'

'-  Presumptive pulmonary or extra - pulmonary TB case : symptoms or clinical signs suggestive of active TB disease .'

'-  possible() mod("pulmonary") or mod("extra - pulmonary") cond("TB") case : possible() or clinical signs possible() of eq(temporal_per(PRESENT)) cond("TB disease") .'

union (
    cond("TB")
        .mod("pulmonary")
        .mod("extra - pulmonary")
        .possible(),
    cond("TB disease")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)
    