'EXC'

'-  history of chronic gastrointestinal symptoms ( for healthy control population only )'

'-  eq(temporal_per(PAST)) of chronic() cond("gastrointestinal") possible() ( for healthy control population only )'

cond("gastrointestinal")
    .temporality(
        eq(temporal_per(PAST))
    )
    .chronic()
    .possible()