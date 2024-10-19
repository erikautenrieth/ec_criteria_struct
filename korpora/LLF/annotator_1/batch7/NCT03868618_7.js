'EXC'

'-  Significant co - morbidities that contraindicates surgery or general anesthesia'

'-  severity(SEVERE) cond("co - morbidities") that contraindication() proc("surgery") or proc("general anesthesia")'

contraindication(
    proc("surgery"),
    proc("general anesthesia")
)
.caused_by(
    cond("co - morbidities")
        .severity(SEVERE)
)