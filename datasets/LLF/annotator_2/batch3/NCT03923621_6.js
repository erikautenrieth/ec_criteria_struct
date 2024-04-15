'EXC'

'-  Co - morbidity > ASA II'

'-  cond("Co - morbidity") > clin_score("ASA") eq(op(GT), val("II"))'

intersect(
    cond("Co - morbidity"),
    clin_score("ASA")
        .num_filter(
            eq(op(GT), val("II"))
        )
)