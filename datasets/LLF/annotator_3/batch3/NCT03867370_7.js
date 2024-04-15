'EXC'

'3.  Patients with a history of gastroesophageal varices or active cardia ulcers associated with a high risk of bleeding ;'

'3.  Patients with a eq(temporal_per(PAST)) of cond("gastroesophageal varices") or eq(temporal_per(PRESENT)) cond("cardia ulcers") associated with a pol(HIGH) risk() of obs("bleeding") ;'

union(
    cond("gastroesophageal varices")
        .temporality(
            eq(temporal_per(PAST))
        ),
    risk(
        obs("bleeding")
    )
        .pol(HIGH)
        .equiv(
            cond("cardia ulcers")
                .temporality(
                    eq(temporal_per(PRESENT))
                )
        )
)
