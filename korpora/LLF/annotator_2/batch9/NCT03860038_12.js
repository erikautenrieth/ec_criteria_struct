'EXC'

'5.  Subject has received anti - myeloma treatment ( radiotherapy is excluded ) within 4 weeks or 5 PK half - lives of the treatment , whichever longer , before the first study agent administration .'

'5.  Subject has received proc("anti - myeloma treatment") ( proc("radiotherapy") is except() ) eq(op(LTEQ), val("4"), temporal_unit(WEEK)) or eq(val("5"), unit("PK half - lives")) of the proc() , whichever longer , before the first study agent administration .'

union(
    proc("anti - myeloma treatment")
        .except(
            proc("radiotherapy")
        )
        .temporality(
            eq(op(LTEQ), val("4"), temporal_unit(WEEK))
        ),
    proc()
        .temporality(
            eq(val("5"), unit("PK half - lives"))
        )
)