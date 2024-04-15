'EXC'

'-  Contraindication or allergy to ibuprofen'

'-  contraindication() or allergy() to drug("ibuprofen")'

union(
    contraindication(
        drug("ibuprofen")
    ),
    allergy(
        drug("ibuprofen")
    )
)