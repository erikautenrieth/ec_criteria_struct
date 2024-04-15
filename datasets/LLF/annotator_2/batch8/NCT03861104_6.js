'EXC'

'-  if the patient is taking antidepressants during the last 6 months'

'-  if the patient is eq(temporal_per(PRESENT)) drug("antidepressants") during the eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))'

drug("antidepressants")
    .temporality(
        and(
            eq(temporal_per(PRESENT)),
            eq(temporal_per(PAST), val("6"), temporal_unit(MONTH))
        )
    )