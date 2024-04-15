'INC'

'ii .  Moderate to severe disease iii .  Candidate for phototherapy or systemic therapy b .'

'ii .  eq(severity(MODERATE), op(BETWEEN), severity(SEVERE)) cond() iii .  contraindication() for proc("phototherapy") or proc("systemic therapy") b .'

union(
    cond()
        .severity(
            eq(severity(MODERATE), op(BETWEEN), severity(SEVERE))
        ),
    contraindication(
        proc("phototherapy"),
        proc("systemic therapy")
    )
)