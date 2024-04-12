'INC'

'-  Experience heartburn symptoms at least 2 days a week during the past 3 months .'

'-  Experience cond("heartburn") possible() eq(op(GTEQ), val("2"), temporal_unit(DAY), per(WEEK)) during the eq(temporal_per(PAST), val("3"), temporal_unit(MONTH)) .'

seq(
    cond("heartburn")
        .possible() 
        .temporality(
            eq(op(GTEQ), val("2"), temporal_unit(DAY), per(WEEK))
        ),
    during(
        eq(temporal_per(PAST), val("3"), temporal_unit(MONTH))
    )
)