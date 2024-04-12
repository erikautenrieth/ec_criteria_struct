'EXC'

'2.  Patients with a history of drug abuse and / or alcohol abuse 2 years prior to the screening period'

'2.  Patients with a eq(temporal_per(PAST)) of cond("drug abuse") and / or cond("alcohol abuse") eq(val("2"), temporal_unit(YEAR)) prior to the screening period'

union(
    cond("drug abuse")
        .temporality(
            eq(temporal_per(PAST))
        ),
     cond("alcohol abuse")
        .temporality(
            eq(val("2"), temporal_unit(YEAR))
        )
)