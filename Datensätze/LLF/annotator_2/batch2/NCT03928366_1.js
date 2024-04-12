'INC'

'-  Healthy adult volunteers ( ASA 1 physical state ) who agree to participate voluntarily in the study , previous information about it by the Principal Investigators ( IP ) .'

'-  cond("Healthy") adult() volunteers ( clin_score("ASA") eq(val("1")) physical state ) who agree to participate voluntarily in the study , previous information about it by the Principal Investigators ( IP ) .'

intersect(
    cond("Healthy"),
    adult(),
    clin_score("ASA")
        .num_filter(
            eq(val("1"))
        )
)