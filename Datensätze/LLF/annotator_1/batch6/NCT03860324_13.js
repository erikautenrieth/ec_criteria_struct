'EXC'

'-  Allergy or contraindication to the use of morphine'

'-  allergy() or contraindication() to the use of drug("morphine")'

union(
    allergy(
        drug("morphine")
    ),
    contraindication(
        drug("morphine")
    )
)