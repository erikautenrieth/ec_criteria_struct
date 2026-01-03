'EXC'

'-  uncontrolled cardiovascular , pulmonary , neurological , or metabolic disease which may impact the ability to exercise or in which exercise is contraindicated'

'-  change() mod("cardiovascular") , mod("pulmonary") , mod("neurological") , or mod("metabolic") cond("disease") which may impact the ability to exercise or in which social_habit("exercise") is contraindication()'

union(
    cond("disease")
        .change()
        .mod("cardiovascular")
        .mod("pulmonary")
        .mod("neurological")
        .mod("metabolic"),
    contraindication(
        social_habit("exercise")
    )
)