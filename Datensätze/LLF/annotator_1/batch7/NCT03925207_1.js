'INC'

'-  Patients were included if they underwent orbital ball implants after enucleation surgery by one ophthalmologist surgeon specializing in oculoplastic and orbital surgery at our centre .'

'-  Patients were included if they eq(temporal_per(PAST)) proc("orbital ball implants") after proc("enucleation surgery") by one ophthalmologist surgeon specializing in oculoplastic and orbital surgery at our centre .'

seq(
    proc("orbital ball implants")
        .temporality(
            eq(temporal_per(PAST))
        ),
    after(
        proc("enucleation surgery")
    )
)