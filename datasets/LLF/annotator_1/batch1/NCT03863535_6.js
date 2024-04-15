'EXC'

'1.  history of prior laser treatment or vitrectomy in the study eye ;'

'1.  eq(temporal_per(PAST)) proc("laser treatment") or proc("vitrectomy") in the study mod("eye") ;'

union(
    proc("laser treatment"),
    proc("vitrectomy")
)
.temporality(
    eq(temporal_per(PAST))
)
.mod("eye")