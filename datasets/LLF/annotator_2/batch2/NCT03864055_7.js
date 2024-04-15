'INC'

'-  lack of a clinical or radiological finding of mastoiditis in the patient\'s file'

'-  neg() a mod("clinical") or proc("radiological") finding of cond("mastoiditis") in the patient\'s file'

neg(
    cond("mastoiditis")
        .mod("clinical")
        .found_by(
            proc("radiological")
        )
)