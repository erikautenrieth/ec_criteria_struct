'EXC'

'-  LDL > 130 mg / dL ; Triglycerides > 150 mg / dL'

'-  lab("LDL") eq(op(GT), val("130"), unit("mg"), unit("dL")) ; lab("Triglycerides") eq(op(GT), val("150"), unit("mg"), unit("dL"))'

union(
    lab("LDL")
        .num_filter(
            eq(op(GT), val("130"), unit("mg"), unit("dL"))
        ),
    lab("Triglycerides")
        .num_filter(
            eq(op(GT), val("150"), unit("mg"), unit("dL"))
        )
)