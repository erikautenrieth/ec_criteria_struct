'EXC'

'-  For on - treatment participants : a positive serum pregnancy test .'

'-  For eq(temporal_per(PRESENT)) - proc() participants : a pol(POSITIVE) lab("serum pregnancy test") .'

if_then(
    proc()
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    lab("serum pregnancy test")
        .pol(POSITIVE)
)
