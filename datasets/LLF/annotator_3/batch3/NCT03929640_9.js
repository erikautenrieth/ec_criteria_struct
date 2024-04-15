'EXC'

'-  Allergy or contraindication to study medication'

'-  allergy() or contraindication() to study drug()'

union(
    allergy(
        drug()
    ),
    contraindication(
        drug()
    )
)
