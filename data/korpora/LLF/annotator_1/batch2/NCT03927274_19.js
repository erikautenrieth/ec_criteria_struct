'EXC'

'-  Systemic diseases associated with unacceptable anesthesia or operative risk'

'-  mod("Systemic") cond() associated with unacceptable proc("anesthesia") or proc("operative") contraindication()'

contraindication(
    proc("anesthesia"), 
    proc("operative")
)
.caused_by(
    cond()
        .mod("Systemic")
)