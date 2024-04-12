'EXC'

'-  Allergy or contraindications to the drugs used in the study'

'-  allergy() or contraindication() to the drug() used in the study'

union(
    allergy(
        drug()
    ),
    contraindication(
        drug()
    )
)