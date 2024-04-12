'EXC'

'6.  Patients with respiratory management difficulties ( Modified Mallampati grade IV )'

'6.  Patients with cond("respiratory management difficulties") ( clin_score("Modified Mallampati") eq(unit("grade"), val("IV")) )'

cond("respiratory management difficulties")
    .equiv(
        clin_score("Modified Mallampati")
            .num_filter(
                eq(unit("grade"), val("IV"))
            )
    )