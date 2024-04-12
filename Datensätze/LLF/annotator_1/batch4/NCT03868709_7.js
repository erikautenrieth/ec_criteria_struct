'EXC'

'2.  Pre operative history of prostatic hypertrophy or glaucoma ;'

'2.  Pre proc("operative") eq(temporal_per(PAST)) of cond("prostatic hypertrophy") or cond("glaucoma") ;'

seq(
    union(
        cond("prostatic hypertrophy"),
        cond("glaucoma")
    )
    .temporality(
        eq(temporal_per(PAST))
    ), 
    before(
        proc("operative")
    )
)
