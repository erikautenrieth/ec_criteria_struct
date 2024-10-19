'INC'

'-  Patients with ( suspicion of ) primary or recurrent EOC with an indication for surgery , chemotherapy and / or immunotherapy .'

'-  Patients with ( possible() of ) mod("primary") or mod("recurrent") cond("EOC") with an indication() for proc("surgery") , proc("chemotherapy") and / or proc("immunotherapy") .'

intersect(
    cond("EOC")
        .possible()
        .mod("primary")
        .mod("recurrent"),
    indication(
        proc("surgery"),
        proc("chemotherapy"),
        proc("immunotherapy")
    )
)
