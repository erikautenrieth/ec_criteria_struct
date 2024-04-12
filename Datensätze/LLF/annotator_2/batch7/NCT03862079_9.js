'EXC'

'-  Patients who are greater than 2 days from time of neutrophil engraftment post AHCT'

'-  Patients who are eq(op(GT), val("2"), temporal_unit(DAY)) from time of proc("neutrophil engraftment") post proc("AHCT")'

seq(
    proc("neutrophil engraftment")
        .temporality(
            eq(op(GT), val("2"), temporal_unit(DAY))
        ),
    after(
        proc("AHCT")
    )
)