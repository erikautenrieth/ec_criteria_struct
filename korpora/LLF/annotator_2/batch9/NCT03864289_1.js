'INC'

'-  Children with ASD or high risk for autism ;'

'-  child() with cond("ASD") or pol(HIGH) risk() for cond("autism") ;'

intersect(
    child(),
    union(
        cond("ASD"),
        risk(
            cond("autism")
        )
            .pol(HIGH)
    )
)