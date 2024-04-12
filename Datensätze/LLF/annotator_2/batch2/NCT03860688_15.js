'EXC'

'12.  Patients with hypersensitive to Revestive or any ingredient , active or a history of the drug within the last 5 years'

'12.  Patients with cond("hypersensitive") to drug("Revestive") or any ingredient , eq(temporal_per(PRESENT)) or a eq(temporal_per(PAST)) of the drug eq(op(LTEQ), temporal_per(PAST), val("5"), temporal_unit(YEAR))'

union(
    cond("hypersensitive")
        .caused_by(
            drug("Revestive")
        ),
    drug("Revestive")
        .temporality(
            or(
                eq(temporal_per(PRESENT)),
                eq(temporal_per(PAST))
            )
        )
        .temporality(
            eq(op(LTEQ), temporal_per(PAST), val("5"), temporal_unit(YEAR))
        )
)
