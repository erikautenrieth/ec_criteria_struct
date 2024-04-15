'EXC'

'-  History of neurological injury , gait pathology , or cardiovascular condition that would limit your ability to ambulate for multiple hours .'

'-  eq(temporal_per(PAST)) of obs("neurological injury") , cond("gait pathology") , or cond("cardiovascular condition") that would limit your ability to ambulate for multiple hours .'

union(
    obs("neurological injury")
        .temporality(
            eq(temporal_per(PAST))
        ),
    cond("gait pathology"),
    cond("cardiovascular condition")
)
