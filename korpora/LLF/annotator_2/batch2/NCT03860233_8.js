'EXC'

'-  Subjects who are compulsorily detain or treatment of either a psychiatric or physical ( i . e .  infectious disease ) illness'

'-  Subjects who are obs("compulsorily detain") or proc() of either a mod("psychiatric") or mod("physical") ( i . e .  cond("infectious disease") ) cond("illness")'

union(
    obs("compulsorily detain"),
    proc()
        .for(
            cond("illness")
                .mod("psychiatric")
                .mod("physical")
                .equiv(
                    cond("infectious disease")
                )
        )
)