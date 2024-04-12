'EXC'

'-  Use of certain medications , including proton pump inhibitors , H 2 - receptor antagonists , or antibiotics'

'-  eq(temporal_per(PRESENT)) of certain drug() , including drug("proton pump inhibitors") , drug("H 2 - receptor antagonists") , or drug("antibiotics")'

drug()
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .equiv(
        drug("proton pump inhibitors"),
        drug("H 2 - receptor antagonists"),
        drug("antibiotics")
    )