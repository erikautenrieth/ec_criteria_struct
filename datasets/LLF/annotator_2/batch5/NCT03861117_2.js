'INC'

'-  Intubated and ventilated in intensive care unit for more than 24 hours'

'-  proc("Intubated") and proc("ventilated") in loc(unit("intensive care unit")) for eq(op(GTEQ), val("24"), temporal_unit(HOUR))'

intersect(
    proc("Intubated"),
    proc("ventilated")
)
    .loc(unit("intensive care unit"))
    .duration(
        eq(op(GTEQ), val("24"), temporal_unit(HOUR))
    )