'INC'

'-  Patients with structural heart disease and implantable cardioverter defibrillator ( ICD )'

'-  Patients with mod("structural") cond("heart disease") and proc("implantable cardioverter defibrillator") ( proc("ICD") )'

intersect(
    cond("heart disease")
        .mod("structural"),
    proc("implantable cardioverter defibrillator")
        .equiv(
            proc("ICD")
        )
)