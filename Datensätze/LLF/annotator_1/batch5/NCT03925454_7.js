'EXC'

'-  Living donor transplant or change to peritoneal dialysis planned'

'-  proc("Living donor transplant") or change() to proc("peritoneal dialysis") eq(temporal_per(FUTURE))'

union(
    proc("Living donor transplant"),
    proc("peritoneal dialysis")
)
.change()
.temporality(
    eq(temporal_per(FUTURE))
)