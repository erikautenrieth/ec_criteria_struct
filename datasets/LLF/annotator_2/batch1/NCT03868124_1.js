'INC'

'-  Diagnosed with open - angle glaucoma or ocular hypertension'

'-  Diagnosed with mod("open - angle") cond("glaucoma") or mod("ocular") cond("hypertension")'

union(
    cond("glaucoma")
        .mod("open - angle"),
    cond("hypertension")
        .mod("ocular")
)