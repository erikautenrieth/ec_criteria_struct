'EXC'

'-  Any condition that might prevent the father\'s infant from reaching normal developmental milestones will participation , including congenital malformations or prematurity requiring prolonged / ongoing infant hospitalization .'

'-  Any cond() that might prevent the father\'s infant from reaching normal developmental milestones will participation , including cond("congenital malformations") or cond("prematurity") indication() prolonged / eq(temporal_per(PRESENT)) child() enc(INPATIENT) .'

cond()
    .equiv(
        cond("congenital malformations"),
        intersect(
            cond("prematurity"),
            indication(
                intersect(
                    child(),
                    enc(INPATIENT)
                )
                    .temporality(
                        eq(temporal_per(PRESENT))
                    )
            )
        )
    )