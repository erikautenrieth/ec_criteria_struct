'EXC'

'-  Contraindications to cabergoline ( e . g . , cardiac valve disorder; pulmonary , pericardial , retroperitoneal fibrotic disorder; hypersensitivity to ergot derivatives; uncontrolled hypertension )'

'-  contraindication() to drug("cabergoline") ( e . g . , cond("cardiac valve disorder") ; mod("pulmonary") , mod("pericardial") , mod("retroperitoneal fibrotic") cond("disorder") ; cond("hypersensitivity") to mod("ergot derivatives") ; change() cond("hypertension") )'

contraindication(
    drug("cabergoline")
)
.equiv(
    cond("cardiac valve disorder"),
    cond("disorder")
        .mod("retroperitoneal fibrotic")
        .mod("pericardial")
        .mod("pulmonary"),
    cond("hypersensitivity")
        .mod("ergot derivatives"),
    cond("hypertension")
        .change()
)