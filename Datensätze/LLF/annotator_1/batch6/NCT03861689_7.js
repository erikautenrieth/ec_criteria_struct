'EXC'

'-  Patients who have allergic reaction / contraindications to anti - TNF'

'-  Patients who have allergic mod("reaction") / contraindication() to drug("anti - TNF")'

union(
    allergy(
        drug("anti - TNF")
    )
        .mod("reaction"),
        contraindication(
            drug("anti - TNF")
        )
)