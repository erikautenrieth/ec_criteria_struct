'INC'

'-  Patients who have seen the study PI ( Remy Coeytaux , MD , PhD ) for an integrative medicine consultation between September 1 , 2018 and April 30 , 2019 and who report having been diagnoses with PTSD or who believe they may have PTSD or PTSD - related symptoms are eligible to participate .'

'-  Patients who have enc(OUTPATIENT) the study PI ( prov("Remy Coeytaux , MD , PhD") ) for an proc("integrative medicine consultation") eq(op(BETWEEN), val("September 1 , 2018"), val("April 30 , 2019")) and who report having been diagnoses with cond("PTSD") or who believe they possible() have cond("PTSD") or cond("PTSD") - related possible() are eligible to participate .'

union(
    enc(OUTPATIENT) 
        .prov("Remy Coeytaux , MD , PhD")
        .for(
            proc("integrative medicine consultation")
        )
        .temporality(
            eq(op(BETWEEN), val("September 1 , 2018"), val("April 30 , 2019"))
        ),
    cond("PTSD"),
    union(
        cond("PTSD"),
        cond("PTSD")
            .possible()
    )
        .possible()
)