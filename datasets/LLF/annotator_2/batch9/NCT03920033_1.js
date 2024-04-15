'INC'

'-  Pathologically confirmed intermediate - or high - risk prostate cancer'

'-  proc("Pathologically") confirmed pol(MEDIUM) - or pol(HIGH) - risk() cond("prostate cancer")'

intersect(
    proc("Pathologically"),
    risk(
        cond("prostate cancer")
    )
        .pol(MEDIUM)
        .pol(HIGH)
)