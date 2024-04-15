'EXC'

'-  antibiotic treatment or non - steroidal anti - inflammatory medications within the last 3 months before the study ,'

'-  drug("antibiotic") proc() or drug("non - steroidal anti - inflammatory medications") eq(op(LTEQ), temporal_per(PAST), val("3"), temporal_unit(MONTH)) before the study ,'

union(
    proc()
        .equiv(
            drug("antibiotic")
        ),
    drug("non - steroidal anti - inflammatory medications")
)
    .temporality(
        eq(op(LTEQ), temporal_per(PAST), val("3"), temporal_unit(MONTH))
    )
     