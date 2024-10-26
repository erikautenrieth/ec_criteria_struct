'EXC'

'-  The exclusion criteria were pregnancy , presence of a urinary tract infection and previous treatment for SI .  The removal criteria were patient non - compliance with the protocol , failure in contacting the patient and the patient\'s wish to withdraw from the study .'

'-  The exclusion criteria were cond("pregnancy") , presence of a cond("urinary tract infection") and eq(temporal_per(PAST)) proc() for cond("SI") .  The removal criteria were patient non - compliance with the protocol , failure in contacting the patient and the patient\'s wish to withdraw from the study .'

union(
    cond("pregnancy"),
    cond("urinary tract infection"),
    proc()
        .for(
            cond("SI")
        )
        .temporality(
            eq(temporal_per(PAST))
        )
)