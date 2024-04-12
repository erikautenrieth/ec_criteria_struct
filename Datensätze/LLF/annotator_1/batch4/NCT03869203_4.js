'EXC'

'-  1.  ASA class > 3'

'-  1.  clin_score("ASA") eq(unit("class"), op(GT), val("3"))'

clin_score("ASA")
    .num_filter(
        eq(unit("class"), op(GT), val("3"))
    )