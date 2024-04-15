'INC'

'-  Documentation of CSVT in an imaging study , either CT or MRI .'

'-  Documentation of cond("CSVT") in an proc("imaging study") , either proc("CT") or proc("MRI") .'

cond("CSVT")
    .found_by(
        proc("imaging study")
        .equiv(
            proc("CT"),
            proc("MRI")
        )
    )