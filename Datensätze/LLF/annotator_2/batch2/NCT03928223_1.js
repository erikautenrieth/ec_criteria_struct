'INC'

'-  Dermatology in - and outpatients with itch'

'-  Dermatology enc(INPATIENT) - and enc(OUTPATIENT) with cond("itch")'

intersect(
    union(
        enc(INPATIENT),
        enc(OUTPATIENT)
    ),
    cond("itch")
)