'INC'

'-  Treatment - naive postmenopausal women'

'-  proc() - neg() cond("postmenopausal") female()'

intersect(
    cond("postmenopausal"),
    female(),
    neg(
        proc()
    )
)