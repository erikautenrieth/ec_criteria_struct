'EXC'

'-  Previous thoracic or abdominal surgery .'

'-  eq(temporal_per(PAST)) mod("thoracic") or mod("abdominal") proc("surgery") .'

proc("surgery")
    .mod("thoracic")
    .mod("abdominal")
    .temporality(
        eq(temporal_per(PAST))
    )