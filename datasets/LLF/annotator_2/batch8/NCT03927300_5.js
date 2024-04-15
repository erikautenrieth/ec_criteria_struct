'EXC'

'-  Patients who have started a peritoneal dialysis program before the periods of investigation ;'

'-  Patients who have eq(temporal_rec(FIRST_TIME)) a proc("peritoneal dialysis") program before the periods of investigation ;'

proc("peritoneal dialysis")
    .temporality(
        eq(temporal_rec(FIRST_TIME))
    )