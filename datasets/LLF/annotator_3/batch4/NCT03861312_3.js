'EXC'

'-  Exclusion criteria included the following : a ) patients with rheumatic diseases , cervical hernia , cervical whiplash syndrome , neck surgeries or history of arthrodesis , b ) systemic diseases , c ) vision , hearing or vestibular problems , d ) Severe trauma or traffic accident which has had an impact on the cervical area .'

'-  Exclusion criteria included the following : a ) patients with cond("rheumatic diseases") , cond("cervical hernia") , cond("cervical whiplash syndrome") , mod("neck") proc("surgeries") or eq(temporal_per(PAST)) of proc("arthrodesis") , b ) mod("systemic") cond() , c ) mod("vision") , mod("hearing") or mod("vestibular") cond("problems") , d ) severity(SEVERE) obs("trauma") or obs("traffic accident") which has had an change() on the mod("cervical area") .'

union(
    union(
        cond("rheumatic diseases"),
        cond("cervical hernia"),
        cond("cervical whiplash syndrome"),
        proc("surgeries")
            .mod("neck"),
        proc("arthrodesis")
            .temporality(
                eq(temporal_per(PAST))
            )
    ),
    cond()
        .mod("systemic"),
    cond("problems")
        .mod("vision")
        .mod("hearing")
        .mod("vestibular"),
    union(
        obs("trauma"),
        obs("traffic accident")
    )
        .severity(SEVERE)
        .change()
        .mod("cervical area")
)
