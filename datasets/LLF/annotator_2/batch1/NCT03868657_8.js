'EXC'

'-  Regular medication ( contraceptive pills allowed )'

'-  eq(temporal_per(PRESENT)) drug() ( drug("contraceptive pills") except() )'

drug()
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .except(
        drug("contraceptive pills")
    )