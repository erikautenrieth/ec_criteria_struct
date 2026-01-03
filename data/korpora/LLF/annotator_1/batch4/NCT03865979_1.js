'INC'

'-  Subjects with stroke symptoms who undergo CT brain imaging .'

'-  Subjects with cond("stroke") possible() who undergo proc("CT brain imaging") .'

intersect(
    cond("stroke")
        .possible(), 
    proc("CT brain imaging")
)