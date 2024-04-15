'EXC'

'-  history of moderate - severe somatic or autonomic neuropathy , cardiovascular disease , preproliferative or proliferative retinopathy , and chronic renal failure'

'-  eq(temporal_per(PAST)) of severity(MODERATE) - severity(SEVERE) mod("somatic") or mod("autonomic") cond("neuropathy") , cond("cardiovascular disease") , mod("preproliferative") or mod("proliferative") cond("retinopathy") , and chronic() cond("renal failure")'

union(
    cond("neuropathy")
        .severity(MODERATE)
        .severity(SEVERE)
        .mod("somatic")
        .mod("autonomic"),
    cond("cardiovascular disease"),
    cond("retinopathy")
        .mod("preproliferative")
        .mod("proliferative"),
    cond("renal failure")
        .chronic()
)
    .temporality(
        eq(temporal_per(PAST))
    )
