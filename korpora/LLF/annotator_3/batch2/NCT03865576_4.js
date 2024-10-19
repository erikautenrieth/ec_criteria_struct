'EXC'

'-  Glaucoma or optic hypertension'

'-  cond("Glaucoma") or mod("optic") cond("hypertension")'

union(
    cond("Glaucoma"),
    cond("hypertension")
        .mod("optic")
)
