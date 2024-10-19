'INC'

'-  1 ) Age : 20 ~ 35 years old; 2 ) first parturients registered in the obstetrics department of our hospital ; 3 ) no medical complications before pregnancy , no UI and POP ( according to the standard of POP - Q stage ) ; 4 ) no obstetric complications; 5 ) the patients agreed to conduct the study and signed the informed consent .'

'-  1 ) age() : eq(val("20"), op(BETWEEN), temporal_unit(YEAR)) old; 2 ) eq(temporal_rec(FIRST_TIME)) cond("parturients") enc(INPATIENT) in the loc(unit("obstetrics department")) of our hospital ; 3 ) neg() cond() before cond("pregnancy") , neg() cond("UI") and cond("POP") ( according to the obs("standard of POP - Q stage") ) ; 4 ) neg() cond("obstetric complications") ; 5 ) the patients agreed to conduct the study and signed the informed consent .'

intersect(
    age()
        .num_filter(
            eq(val("20"), op(BETWEEN), temporal_unit(YEAR)) 
        ),
    enc(INPATIENT)
        .temporality(
            eq(temporal_rec(FIRST_TIME))
        )
        .for(
            cond("parturients")
        )
        .loc(unit("obstetrics department")),
    neg(
        cond("UI"),
        cond("POP")
    )
        .found_by(
            obs("standard of POP - Q stage")
        ),
    neg(
        cond("obstetric complications")
    )
)