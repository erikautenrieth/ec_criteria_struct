'INC'

'-  Women with a twin pregnancy ( mono - and di - chorionic )'

'-  female() with a mod("twin") cond("pregnancy") ( mod("mono -") and mod("di - chorionic") )'

intersect(
    female(),
    cond("pregnancy")
        .mod("twin")
        .mod("mono -")
        .mod("di - chorionic")
)
