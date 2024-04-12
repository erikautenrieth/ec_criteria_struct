'INC'

'-  excluded from curative therapy because of disease stage and / or presence of multiple comorbidities and / or poor performance status'

'-  neg() from proc("curative therapy") because of disease stage and / or presence of eq(op(GT)) cond("comorbidities") and / or pol(LOW) obs("performance status")'

neg(
    proc("curative therapy")
)
.caused_by(
    union(
        cond("comorbidities")
            .min_count(
                eq(op(GT))
            ),
        obs("performance status")
            .pol(LOW)
    )
)       