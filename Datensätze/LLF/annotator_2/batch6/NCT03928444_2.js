'INC'

'-  Glogau photoaging score II and III .'

'-  clin_score("Glogau photoaging") eq(unit("score"), val("II"), val("III")) .'

clin_score("Glogau photoaging")
    .num_filter(
        eq(unit("score"), val("II"), val("III"))
    )