'EXC'

'-  Chronic kidney disease stage III and stage IV'

'-  chronic() cond("kidney disease") eq(unit("stage"), val("III"), val("IV"))'

cond("kidney disease")
    .chronic()
    .num_filter(
        eq(unit("stage"), val("III"), val("IV"))
    )