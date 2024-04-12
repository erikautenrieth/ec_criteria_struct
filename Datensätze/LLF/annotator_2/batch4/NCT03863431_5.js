'INC'

'-  Non - smoker ( including the use of vaporisers and e - cigarettes )'

'-  neg() - obs("smoker") ( including the use of drug("vaporisers") and drug("e - cigarettes") )'

neg(
    obs("smoker")
        .equiv(
            drug("vaporisers"),
            drug("e - cigarettes")
        )
)
