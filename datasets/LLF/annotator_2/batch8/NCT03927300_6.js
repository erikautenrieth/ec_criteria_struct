'EXC'

'-  Patients who have been equipped with apTeleCare during the dialysis program ;'

'-  Patients who have been equipped with proc("apTeleCare") during the proc("dialysis") program ;'

seq(
    proc("apTeleCare"),
    during(
        proc("dialysis")
    )
)