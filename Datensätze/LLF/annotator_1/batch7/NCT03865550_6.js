'EXC'

'-  Contraindication or allergy to opioid pain medication or ketamine *'

'-  contraindication() or allergy() to drug("opioid pain medication") or drug("ketamine") *'

union(
    contraindication(
        drug("opioid pain medication"),
        drug("ketamine")
    ),
    allergy(
        drug("opioid pain medication"),
        drug("ketamine")
    )
)