'INC'

'-  history of blepharitis and meet qualifying criteria for an acute exacerbation of blepharitis in both eyes at Screening and Baseline / Day 1 Visits'

'-  eq(temporal_per(PAST)) of cond("blepharitis") and meet qualifying criteria for an acute() change() of cond("blepharitis") in mod("both eyes") at Screening and Baseline / Day 1 Visits'

cond("blepharitis")
    .temporality(
        eq(temporal_per(PAST))
    )
    .equiv(
        cond("blepharitis")
            .acute()
            .change()
            .mod("both eyes")
    )