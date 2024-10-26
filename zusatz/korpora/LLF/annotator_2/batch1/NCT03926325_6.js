'EXC'

'2.  IHCA : The patient who suffered a cardiac arrest that occurred out - of - hospital and then transferred to the hospital .'

'2.  IHCA : The patient who suffered a cond("cardiac arrest") that occurred out - of - loc(hosp("hospital")) and then enc(TRANSFER) to the loc(hosp("hospital")) .'

seq(
    cond("cardiac arrest")
        .loc(hosp("hospital")),
    after(
        enc(TRANSFER)
            .loc(hosp("hospital"))
    )
)