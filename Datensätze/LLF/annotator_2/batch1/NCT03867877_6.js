'EXC'

'-  Greater than Stage 3 on the Hoehn & Yahr Classification of Disability'

'-  eq(op(GT), unit("Stage"), val("3")) on the cond("Hoehn & Yahr Classification of Disability")'

cond("Hoehn & Yahr Classification of Disability")
    .num_filter(
        eq(op(GT), unit("Stage"), val("3"))
    )