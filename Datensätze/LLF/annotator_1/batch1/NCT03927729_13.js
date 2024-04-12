'EXC'

'-  Hypersensitivity to fluoridated anesthetics or history of malignant hyperthermia in the patient or family'

'-  cond("Hypersensitivity") to mod("fluoridated anesthetics") or eq(temporal_per(PAST)) of cond("malignant hyperthermia") in the patient or family_member()'

union(
    cond("Hypersensitivity")
        .mod("fluoridated anesthetics"), 
    union(
        cond("malignant hyperthermia"),
        family_member(
            cond("malignant hyperthermia")
        )
    )
    .temporality(
        eq(temporal_per(PAST))
    )
)