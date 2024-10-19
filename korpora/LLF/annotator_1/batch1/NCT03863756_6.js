'EXC'

'-  Patients who have had surgery on the spine and / or hip .'

'-  Patients who have eq(temporal_per(PAST)) proc("surgery") on the mod("spine") and / or mod("hip") .'

proc("surgery")
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("spine")
    .mod("hip")
