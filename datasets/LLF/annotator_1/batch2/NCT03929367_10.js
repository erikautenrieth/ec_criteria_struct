'EXC'

'-  Subjects with neuropathy , chronic pain , diabetes mellitus , or taking benzodiazepines or pain medications on a daily basis .'

'-  Subjects with cond("neuropathy") , chronic() obs("pain") , cond("diabetes mellitus") , or eq(temporal_per(PRESENT)) drug("benzodiazepines") or drug("pain medications") on a eq(per(DAY)) basis .'

union(
    cond("neuropathy"),
    obs("pain")
        .chronic(),
    cond("diabetes mellitus"),
    union(
        drug("benzodiazepines"),
        drug("pain medications")
    ).temporality(
        eq(per(DAY))
    )
)