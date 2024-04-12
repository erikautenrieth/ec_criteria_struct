'EXC'

'-  change in dose of opioids / sedatives / benzodiazepines during last 2 weeks before study )'

'-  change() in dose of drug("opioids") / drug("sedatives") / drug("benzodiazepines") during eq(temporal_per(PAST), val("2"), temporal_unit(WEEK)) before study )'

union(
    drug("opioids"),
    drug("sedatives"),
    drug("benzodiazepines")
)
    .change()
    .temporality(
        eq(temporal_per(PAST), val("2"), temporal_unit(WEEK))
    )