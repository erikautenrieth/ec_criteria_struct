'INC'

'-  3.  paroxysmal atrial fibrillation that is recurrence during antiarrhythmic drug treatment or is not able to use an antiarrhythmic drug .'

'-  3.  mod("paroxysmal") cond("atrial fibrillation") that is recurrence during drug("antiarrhythmic drug") proc() or is contraindication() use an drug("antiarrhythmic drug") .'

intersect(
    cond("atrial fibrillation")
        .mod("paroxysmal"),
    union(
        proc()
            .equiv(
                drug("antiarrhythmic drug")
            ),
        contraindication(
            drug("antiarrhythmic drug")
        )
    )   
)