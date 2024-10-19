'EXC'

'-  Chemotherapy / Radiation which impacts the semen result'

'-  proc("Chemotherapy") / proc("Radiation") which change() the obs("semen result")'

obs("semen result")
    .change()
    .caused_by(
        proc("Chemotherapy"),
        proc("Radiation")
    )