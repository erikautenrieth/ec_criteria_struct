'INC'

'-  The patient exhibits chronic anaemia or cholelithiasis or cholecystitis of undetermined aetiology or The patient has a high - grade PKD suspicion due to any clinical item or The patient is diagnosed biochemically and / or genetically with PKD'

'-  The patient exhibits chronic() cond("anaemia") or cond("cholelithiasis") or cond("cholecystitis") of mod("undetermined aetiology") or The patient has a pol(HIGH) - grade cond("PKD") possible() due to any clinical item or The patient is diagnosed proc("biochemically") and / or proc("genetically") with cond("PKD")'

union(
    cond("anaemia")
        .chronic(),
    cond("cholelithiasis"),
    cond("cholecystitis")
        .mod("undetermined aetiology"),
    cond("PKD")
        .pol(HIGH)
        .possible(),
    cond("PKD")
        .found_by(
            proc("biochemically"),
            proc("genetically")
        )
)