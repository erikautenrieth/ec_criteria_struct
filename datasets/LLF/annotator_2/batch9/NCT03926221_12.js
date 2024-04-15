'EXC'

'5.  suicide risk ; bipolar disorder or schizophrenia or another current Axis I disorder if there is a significant risk of harm and / or decompensation if treatment of that comorbid condition is delayed as a function of participating in any stage of this study ;'

'5.  cond("suicide") risk() ; cond("bipolar disorder") or cond("schizophrenia") or another eq(temporal_per(PRESENT)) eq(unit("Axis"), val("I")) cond("disorder") if there is a severity(SEVERE) risk() of obs("harm") and / or cond("decompensation") if proc() of that cond() is change() as a function of participating in any stage of this study ;'

union(
    risk(
        cond("suicide")    
    ),
    cond("bipolar disorder"),
    cond("schizophrenia"),
    cond("disorder")
        .temporality(
            eq(temporal_per(PRESENT))
        )
        .num_filter(
            eq(unit("Axis"), val("I")) 
        ),
    union(
        risk(
            obs("harm")
        )
            .severity(SEVERE),
        cond("decompensation")
    ),
    proc()
        .for(
            cond()
        )
        .change()
)