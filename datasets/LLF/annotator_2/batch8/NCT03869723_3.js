'INC'

'-  patient alive 6 months after completion of treatment'

'-  patient obs("alive") eq(val("6"), temporal_unit(MONTH)) after completion of proc()'

seq(
    obs("alive")    
        .duration(
            eq(val("6"), temporal_unit(MONTH))
        ),
    after(
        proc()
    )
)