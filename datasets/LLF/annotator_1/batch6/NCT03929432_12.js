'EXC'

'-  Clinical conditions contraindicated for MRI or tDCS ( e . g . , implanted electrical devices , claustrophobia , seizure disorder )'

'-  Clinical cond() contraindication() for proc("MRI") or proc("tDCS") ( e . g . , proc("implanted electrical devices") , cond("claustrophobia") , cond("seizure disorder") )'

contraindication(
    proc("MRI"),
    proc("tDCS")
)
.caused_by(
    cond()
)
.equiv(
    proc("implanted electrical devices"),
    cond("claustrophobia"),
    cond("seizure disorder")
)