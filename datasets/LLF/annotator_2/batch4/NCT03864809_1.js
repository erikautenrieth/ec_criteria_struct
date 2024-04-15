'INC'

'- patients with Psoriasis and Patients with A topic dermatitis'

'- patients with cond("Psoriasis") and Patients with A cond("topic dermatitis")'

union(
    cond("Psoriasis"),
    cond("topic dermatitis")
)