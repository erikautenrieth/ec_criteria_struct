'EXC'

'-  The aetiology of chronic anaemia or cholelithiasis or cholecystitis is determined and is not due to PKD'

'-  The aetiology of chronic() cond("anaemia") or cond("cholelithiasis") or cond("cholecystitis") is determined and is neg() due to cond("PKD")'

union(
    cond("anaemia")
        .chronic(),
    cond("cholelithiasis"),
    cond("cholecystitis")
)
.caused_by(
    neg(
        cond("PKD")
    )
)