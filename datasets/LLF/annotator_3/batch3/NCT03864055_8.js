'INC'

'-  Lack of documentation of CSVT in an imaging study , either CT or MRI .'

'-  neg() of documentation of cond("CSVT") in an proc("imaging study") , either proc("CT") or proc("MRI") .'

neg(
    cond("CSVT")
)
    .found_by(
        proc("imaging study")
            .equiv(
                proc("CT"),
                proc("MRI")
            )
    )
