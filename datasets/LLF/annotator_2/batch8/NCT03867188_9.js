'EXC'

'-  Any clinically significant event or condition discovered during surgery that may have complicated the patient\'s post surgical course such as vascular or nerve involvement that was unknown before surgery .'

'-  Any clinically significant obs() or cond() discovered during proc("surgery") that may have complicated the patient\'s post proc("surgical") course such as mod("vascular") or mod("nerve") cond("involvement") that was unknown before surgery .'

proc("surgical")
    .equiv(
        cond("involvement")
            .mod("vascular")
            .mod("nerve")
    )
    .caused_by(
        seq(
            union(
                obs(),
                cond()
            ),
            during(
                proc("surgery")
            )
        )
    )