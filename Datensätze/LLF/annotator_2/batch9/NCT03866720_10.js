'EXC'

'-  Any reported use of substances which may pose undue personal risk to the participants or introduce bias into the experiment ( e . g .  smoking / substance abuse )'

'-  Any reported use of drug() which may change() undue personal risk() to the participants or change() bias into the experiment ( e . g .  obs("smoking") / cond("substance abuse") )'

union(
    risk()
        .change(),
    union(
        obs("smoking"),
        cond("substance abuse")
    )
        .change()
)
    .caused_by(
        drug()
    )