'EXC'

'-  Medication preventing exercise and exercise test'

'-  drug() neg() social_habit("exercise") and proc("exercise test")'

intersect(
    drug(),
    neg(
        intersect(
            social_habit("exercise"),
            proc("exercise test")
        )
    )
)