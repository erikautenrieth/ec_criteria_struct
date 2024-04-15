'INC'

'-  Having been prescribed antiretroviral therapy at any time ( including people for who antiretroviral therapy initiation is planned after study enrolment )'

'-  Having been prescribed proc("antiretroviral therapy") at any time ( including people for who proc("antiretroviral therapy") eq(temporal_rec(FIRST_TIME), temporal_per(FUTURE)) after study enrolment )'

proc("antiretroviral therapy")
    .equiv(
        proc("antiretroviral therapy")
            .temporality(
                eq(temporal_rec(FIRST_TIME), temporal_per(FUTURE))
            )
    )