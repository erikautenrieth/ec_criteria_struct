'EXC'

'-  cardiocebrovascular diseases or any cancer during the six months prior to study'

'-  cond("cardiocebrovascular diseases") or any cond("cancer") during the eq(val("six"), temporal_unit(MONTH)) prior to study'

union(
    cond("cardiocebrovascular diseases"),
    cond("cancer")
)
    .temporality(
        eq(val("six"), temporal_unit(MONTH))
    )