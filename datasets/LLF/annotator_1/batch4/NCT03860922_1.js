'INC'

'-  patients in different age groups and both sex referred from orthopedic outpatient clinic with chronic ankle pain and suspected clinically to have impingement syndrome .'

'-  patients in different age groups and both sex enc(REFERRAL) from enc(clin("orthopedic outpatient clinic")) with chronic() obs("ankle pain") and possible() clinically to have cond("impingement syndrome") .'

enc(REFERRAL)
    .loc(clin("orthopedic outpatient clinic"))
    .for(
        obs("ankle pain")
            .chronic(),
        cond("impingement syndrome")
            .possible()
    )