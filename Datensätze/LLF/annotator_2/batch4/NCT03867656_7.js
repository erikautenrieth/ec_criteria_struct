'EXC'

'-  Osteopososis or gastrointestinal disease'

'-  cond("Osteopososis") or mod("gastrointestinal") cond("disease")'

union(
    cond("Osteopososis"),
    cond("disease")
        .mod("gastrointestinal")
)