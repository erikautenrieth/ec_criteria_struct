'EXC'

'-  Any other significant diseases or disorders that are a contraindication to be enrolled in a pulmonary rehabilitation programme .'

'-  Any other severity(SEVERE) cond() or cond() that are a contraindication() to be enrolled in a proc("pulmonary rehabilitation") programme .'

union(
    cond()
        .severity(SEVERE),
    cond()
        .equiv(
            contraindication(
                proc("pulmonary rehabilitation")
            )
        )
)