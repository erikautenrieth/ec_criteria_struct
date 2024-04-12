'EXC'

'-  Caesarean section performed under general anesthesia following failure of locoregional anesthesia .'

'-  proc("Caesarean section") performed under proc("general anesthesia") following failure of mod("locoregional") proc("anesthesia") .'

seq(
    proc("Caesarean section"),
    during(
        proc("general anesthesia")
    ),
    before(
        proc("anesthesia")
            .mod("locoregional")
    )
)