'INC'

'-  Healthy male or females , as determined by medical history'

'-  cond("Healthy") male() or female() , as determined by medical history'

intersect(
    cond("Healthy"),
    union(
        male(),
        female()
    )
)