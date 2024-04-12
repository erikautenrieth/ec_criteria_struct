'EXC'

'-  Patient with a comorbid illness or condition that would preclude the use of surgery ( ASA 5 ) .'

'-  Patient with a cond("comorbid illness") or cond() that contraindication() the use of proc("surgery") ( clin_score("ASA") eq(val("5")) ) .'

contraindication(
    proc("surgery")
)
.caused_by(
    cond("comorbid illness"),
    cond()
)
.equiv(
    clin_score("ASA")
        .num_filter(
            eq(val("5"))
        )
)