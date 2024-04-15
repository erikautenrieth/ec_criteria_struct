'EXC'

'-  Lower limb surgery two years prior to enrollment'

'-  proc("Lower limb surgery") eq(val("two"), temporal_unit(YEAR)) prior to enrollment'

proc("Lower limb surgery")
    .temporality(
        eq(val("two"), temporal_unit(YEAR))
    )