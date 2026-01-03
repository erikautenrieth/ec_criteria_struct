'INC'

'-  Elective surgery at pre operative in - hospital visit'

'-  mod("Elective") proc("surgery") at pre proc("operative") enc(OUTPATIENT)'

seq(
    proc("surgery")
        .mod("Elective"),
    during(
        proc("operative")
    ),
    during(
        enc(OUTPATIENT)
    )
)
