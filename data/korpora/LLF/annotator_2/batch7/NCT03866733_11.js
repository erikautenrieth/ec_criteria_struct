'EXC'

'-  CSF or blood tap during the procedure .'

'-  proc("CSF") or proc("blood tap") during the proc() .'

seq(
    union(
        proc("CSF"),
        proc("blood tap")
    ),
    during(
        proc()
    )
)