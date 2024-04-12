'EXC'

'-  Severe co - morbid disease ( besides from the indication for the pancreas surgery )'

'-  severity(SEVERE) cond("co - morbid disease") ( except() from the indication() for the proc("pancreas surgery") )'

cond("co - morbid disease")
    .severity(SEVERE)
    .except(
        indication(
            proc("pancreas surgery")
        )
    )