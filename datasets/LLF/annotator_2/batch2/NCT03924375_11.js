'EXC'

'-  Recent history of upper gastrointestinal bleeding'

'-  Recent eq(temporal_per(PAST)) of mod("upper gastrointestinal") obs("bleeding")'

obs("bleeding")
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("upper gastrointestinal")