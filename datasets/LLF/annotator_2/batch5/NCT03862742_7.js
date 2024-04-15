'EXC'

'-  Hypertensive urgency or emergency as an admission diagnosis'

'-  cond("Hypertensive") mod("urgency") or mod("emergency") as an type(ADMITTING) diagnosis'

cond("Hypertensive")
    .mod("urgency")
    .mod("emergency")