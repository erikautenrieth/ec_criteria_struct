'INC'

'biopsy proven extracardiac sarcoidosis and / or positive HRS criteria will be enrolled .'

'proc("biopsy") proven cond("extracardiac sarcoidosis") and / or pol(POSITIVE) cond("HRS") criteria will be enrolled .'

union(
    cond("extracardiac sarcoidosis")
        .found_by(
            proc("biopsy")
        ),
    cond("HRS")
        .pol(POSITIVE)
)
