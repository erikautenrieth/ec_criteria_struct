'EXC'

'-  Women with history of polysubstance abuse / narcotic abuse'

'-  female() with eq(temporal_per(PAST)) of cond("polysubstance abuse") / cond("narcotic abuse")'


female()
    .eq(temporal_per(PAST))
    .union(
        cond("polysubstance abuse"),
        cond("narcotic abuse")
    )