'INC'

'-  suffered from one or more epileptic seizures ( detected clinically and / or by EEG ) during their ICU - stay'

'-  suffered from eq(val("one"), op(GTEQ)) cond("epileptic seizures") ( detected mod("clinically") and / or by proc("EEG") ) during their loc(unit("ICU")) - enc(INPATIENT)'

seq(
    cond("epileptic seizures")
        .min_count(
            eq(val("one"), op(GTEQ))
        )
        .mod("clinically")
        .found_by(
            proc("EEG")
        ),
    during(
        enc(INPATIENT)
            .loc(unit("ICU"))
    )
)