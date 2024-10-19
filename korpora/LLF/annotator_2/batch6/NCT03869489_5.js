'EXC'

'-  History of anxiolytic and / or antidepressant medications'

'-  eq(temporal_per(PAST)) of drug("anxiolytic") and / or drug("antidepressant medications")'

union(
    drug("anxiolytic"),
    drug("antidepressant medications")
)
    .temporality(
        eq(temporal_per(PAST))
    )