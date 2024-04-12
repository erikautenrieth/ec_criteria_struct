'EXC'

'2.  Within 2 weeks of cardiac catheterization or arterial puncture at femoral puncture site .'

'2.  eq(op(LTEQ), val("2"), temporal_unit(WEEK)) of proc("cardiac catheterization") or proc("arterial puncture") at mod("femoral puncture site") .'

union(
    proc("cardiac catheterization"),
    proc("arterial puncture")
        .mod("femoral puncture site")
)
    .temporality(
        eq(op(LTEQ), val("2"), temporal_unit(WEEK))
    )
