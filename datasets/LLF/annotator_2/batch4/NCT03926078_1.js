'INC'

'-  All patients that visit the Zuyderland Medical Centre outpatient clinic for evaluation of their pectus excavatum .'

'-  All patients that enc(OUTPATIENT) the loc(clin("Zuyderland Medical Centre outpatient clinic")) for proc("evaluation") of their cond("pectus excavatum") .'

enc(OUTPATIENT)
    .loc(clin("Zuyderland Medical Centre outpatient clinic"))
    .for(
        intersect(
            proc("evaluation"),
            cond("pectus excavatum")
        )
    )