'INC'

'-  Adults who are critically ill and with MRSA infection suspection .'

'-  adult() who are severity(SEVERE) cond() and with mod("MRSA") cond("infection") possible() .'

intersect(
    adult(),
    cond()
        .severity(SEVERE),
    cond("infection")
        .mod("MRSA")
)