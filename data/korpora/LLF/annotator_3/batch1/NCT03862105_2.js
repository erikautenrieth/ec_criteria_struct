'INC'

'-  Male or female patients with invasive bladder cancer scheduled for radical cystectomy at UNC within the next 30 days'

'-  male() or female() patients with mod("invasive bladder") cond("cancer") eq(temporal_per(FUTURE)) for proc("radical cystectomy") at loc(hosp("UNC")) eq(op(LTEQ), temporal_per(FUTURE), val("30"), temporal_unit(DAY))'

intersect(
    union(
        male(),
        female()
    ),
    cond("cancer")
        .mod("invasive bladder"),
    proc("radical cystectomy")
        .temporality(
            eq(temporal_per(FUTURE))
        )
        .loc(hosp("UNC"))
        .temporality(
            eq(op(LTEQ), temporal_per(FUTURE), val("30"), temporal_unit(DAY))
        )
)