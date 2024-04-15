'INC'

'-  No diagnosis of mild cognitive impairment or dementia in the past year'

'-  neg() diagnosis of cond("mild cognitive impairment") or cond("dementia") in the eq(temporal_per(PAST), temporal_unit(YEAR))'

neg(
    cond("mild cognitive impairment"),
    cond("dementia")
)
    .temporality(
        eq(temporal_per(PAST), temporal_unit(YEAR))
    )