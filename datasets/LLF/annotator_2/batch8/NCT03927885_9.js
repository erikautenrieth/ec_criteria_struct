'EXC'

'-  Surgery , or pain relieving procedures within 2 weeks of entry into the study or during the study period'

'-  proc("Surgery") , or proc("pain relieving procedures") eq(op(LTEQ), val("2"), temporal_unit(WEEK)) of entry into the study or during the study period'

union(
    proc("Surgery"),
    proc("pain relieving procedures")
)
    .temporality(
        eq(op(LTEQ), val("2"), temporal_unit(WEEK))
    )