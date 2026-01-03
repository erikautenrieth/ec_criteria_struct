'EXC'

'-  History of depression , suicidal ideation , or psychosis'

'-  eq(temporal_per(PAST)) of cond("depression") , cond("suicidal ideation") , or cond("psychosis")'

union(
    cond("depression"),
    cond("suicidal ideation"),
    cond("psychosis")
)
    .temporality(
        eq(temporal_per(PAST))
    )