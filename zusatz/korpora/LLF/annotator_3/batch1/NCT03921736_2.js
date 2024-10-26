'INC'

'-  Diagnosed hypertension ( grade 1 or 2 according to ESH / ESC 2013 guidelines )'

'-  Diagnosed cond("hypertension") ( eq(val("1"), val("2")) according to ESH / ESC 2013 guidelines )'

cond("hypertension")
    .num_filter(
        eq(val("1"), val("2"))
    )