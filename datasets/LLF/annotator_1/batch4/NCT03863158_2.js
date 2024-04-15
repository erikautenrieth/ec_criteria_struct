'INC'

'-  Patients undergoing coronary artery bypass in Dijon University hospital'

'-  Patients eq(temporal_per(PRESENT)) proc("coronary artery bypass") in loc(hosp("Dijon University hospital"))'

proc("coronary artery bypass")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .loc(hosp("Dijon University hospital"))