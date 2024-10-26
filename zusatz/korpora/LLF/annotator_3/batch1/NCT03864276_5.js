'EXC'

'-  3.  recent MI ( Myocardial Infarction )'

'-  3.  eq(temporal_per(RECENT)) cond("MI") ( cond("Myocardial Infarction") )'

cond("MI")
    .temporality(
        eq(temporal_per(RECENT))
    )
    .equiv(
        cond("Myocardial Infarction")
    )