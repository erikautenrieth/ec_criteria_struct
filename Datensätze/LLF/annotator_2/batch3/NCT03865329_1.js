'INC'

'-  COPD related hospitalization and eligible for PR'

'-  cond("COPD") related enc(INPATIENT) and eligible for PR'

enc(INPATIENT)    
    .for(
        cond("COPD")
    )