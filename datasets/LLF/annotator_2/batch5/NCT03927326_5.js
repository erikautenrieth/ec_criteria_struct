'EXC'

'-  Patients with ASA status IV , V , or VI'

'-  Patients with clin_score("ASA") status eq(val("IV"), val("V"), val("VI"))'

clin_score("ASA")
    .num_filter(
        eq(val("IV"), val("V"), val("VI"))
    )