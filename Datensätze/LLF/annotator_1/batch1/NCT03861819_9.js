'EXC'

'-  No coronary artery disease or chronic obstructive pulmonary disease'

'-  neg() cond("coronary artery disease") or chronic() cond("obstructive pulmonary disease")'

neg(
    cond("coronary artery disease"),
    cond("obstructive pulmonary disease")
        .chronic()
)