'INC'

'-  3.  paroxysmal atrial fibrillation that is recurrence during antiarrhythmic drug treatment or is not able to use an antiarrhythmic drug .'

'-  3.  cond("paroxysmal atrial fibrillation") that is cond("recurrence") during drug("antiarrhythmic drug") proc() or is contraindication() an drug("antiarrhythmic drug") .'

union(
    seq(
        cond("paroxysmal atrial fibrillation")
            .equiv(
                cond("recurrence")
            ),
        during(
            intersect(
                proc(),
                drug("antiarrhythmic drug")
            )
        )
    ),
    contraindication(
        drug("antiarrhythmic drug")
    )
)