'EXC'

'-  history of allergy or long - term use of propofol and opioids'

'-  eq(temporal_per(PAST)) of allergy() or chronic() use of drug("propofol") and drug("opioids")'

union(
    allergy(
        drug("propofol"),
        drug("opioids")
    )
        .temporality(
            eq(temporal_per(PAST))
        ),
    union(
        drug("propofol"),
        drug("opioids")
    )
        .chronic()
)