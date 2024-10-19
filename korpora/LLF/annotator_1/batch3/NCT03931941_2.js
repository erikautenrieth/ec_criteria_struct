'INC'

'2.  Medical record documentation of either : a ) recurrent CDI per the study definition , that includes at least one recurrence after a primary episode and has completed at least one round of standard - of - care oral antibiotic therapy , b ) or has had at least two episodes of severe CDI resulting in hospitalization .'

'2.  Medical record documentation of either : a ) mod("recurrent") cond("CDI") per the study definition , that includes eq(op(GTEQ), val("one")) recurrence after a primary episode and has completed eq(op(GTEQ), val("one")) round of standard - of - care proc("oral antibiotic therapy") , b ) or has had eq(op(GTEQ), val("two")) episodes of severity(SEVERE) cond("CDI") resulting in enc(INPATIENT) .'

union(
    intersect(
        cond("CDI")
            .mod("recurrent"),
        proc("oral antibiotic therapy")
            .min_count(
                eq(op(GTEQ), val("one"))
            )
    ),
    enc(INPATIENT)
        .min_count(
            eq(op(GTEQ), val("two"))
        )
        .for(
            cond("CDI")
                .severity(SEVERE)
        )
)
    