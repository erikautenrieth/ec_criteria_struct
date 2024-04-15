'INC'

'1.  Patients evaluated for residual or recurrent gliomas after initial tumor surgery , external beam radiation and / or chemotherapy with temozolamide .'

'1.  Patients evaluated for mod("residual") or mod("recurrent") cond("gliomas") after eq(temporal_rec(FIRST_TIME)) cond("tumor") proc("surgery") , proc("external beam radiation") and / or proc("chemotherapy") with drug("temozolamide") .'

seq(
    cond("gliomas")
        .mod("residual")
        .mod("recurrent"),
    after(
        union(
            proc("surgery")
                .for(
                    cond("tumor")
                )
                .temporality(
                    eq(temporal_rec(FIRST_TIME))
                ),
            proc("external beam radiation"),
            intersect(
                proc("chemotherapy"),
                drug("temozolamide")
            )
        )
    )
)