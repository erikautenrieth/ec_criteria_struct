'EXC'

'-  administration of prebiotics or probiotics during the 4 weeks before enrolment .'

'-  administration of drug("prebiotics") or drug("probiotics") during the eq(val("4"), temporal_unit(WEEK)) before enrolment .'

union(
    drug("prebiotics"),
    drug("probiotics")
)
    .temporality(
        eq(val("4"), temporal_unit(WEEK))
    )