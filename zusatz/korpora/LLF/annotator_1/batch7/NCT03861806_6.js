'EXC'

'-  Contraindications to TMS : history of seizure / epilepsy , pacemaker , other neurological disorders , brain surgery , metal implant / fragment in the head , pregnancy'

'-  contraindication() to drug("TMS") : eq(temporal_per(PAST)) of cond("seizure") / cond("epilepsy") , proc("pacemaker") , other cond("neurological disorders") , proc("brain surgery") , proc("metal") mod("implant") / mod("fragment") in the mod("head") , cond("pregnancy")'

contraindication(
    drug("TMS")
)
.equiv(
    union(
        cond("seizure"),
        cond("epilepsy")
    )
        .temporality(
            eq(temporal_per(PAST))
        ),
    proc("pacemaker"),
    cond("neurological disorders"),
    proc("brain surgery"),
    proc("metal")
        .mod("implant")
        .mod("fragment")
        .mod("head"),
    cond("pregnancy")
)