'EXC'

'-  the patients who cannot speak English in Canada , who cannot speak Japanese in Japan , and cannot speak Persian in Iran .'

'-  the patients who neg() speak lang("English") in loc(res("Canada")) , who neg() speak lang("Japanese") in loc(res("Japan")) , and neg() speak lang("Persian") in loc(res("Iran")) .'

union(
    neg(
        lang("English")
    )
        .loc(res("Canada")),
    neg(
        lang("Japanese")
    )
        .loc(res("Japan")),
    neg(
        lang("Persian")
    )
        .loc(res("Iran"))
)