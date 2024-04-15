'INC'

'-  Patients who have been planned a conventional physiotherapy programme because of knee osteoarthritis'

'-  Patients who have been eq(temporal_per(FUTURE)) a conventional proc("physiotherapy") programme because of cond("knee osteoarthritis")'

proc("physiotherapy")
    .temporality(
        eq(temporal_per(FUTURE))
    )
    .for(
        cond("knee osteoarthritis")
    )
