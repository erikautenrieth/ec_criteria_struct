'INC'

'-  Patient in sinusal rhythm before the operation and during the collection of hemodynamic data .'

'-  Patient in cond("sinusal rhythm") before the proc("operation") and during the collection of obs("hemodynamic data") .'

seq(
    cond("sinusal rhythm"),
    before(
        proc("operation")
    ),
    during(
        obs("hemodynamic data")
    )
)