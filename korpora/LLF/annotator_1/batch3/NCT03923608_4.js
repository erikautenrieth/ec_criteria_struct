'INC'

'-  and upper limb and spinal muscular injuries in the last six months'

'-  and mod("upper limb") and mod("spinal muscular") obs("injuries") in the eq(temporal_per(PAST), val("six"), temporal_unit(MONTH))'

obs("injuries")
    .mod("upper limb")
    .mod("spinal muscular")
    .temporality(
        eq(temporal_per(PAST), val("six"), temporal_unit(MONTH))
    )