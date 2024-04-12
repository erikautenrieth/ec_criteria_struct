'INC'

'-  clinical stage III patients with bulky T 3 primary + / - neck metastasis'

'-  clinical eq(unit("stage"), val("III")) patients with mod("bulky T 3 primary") + / - mod("neck") cond("metastasis")'

cond("metastasis")
    .mod("bulky T 3 primary")
    .mod("neck")
    .num_filter(
        eq(unit("stage"), val("III"))
    )