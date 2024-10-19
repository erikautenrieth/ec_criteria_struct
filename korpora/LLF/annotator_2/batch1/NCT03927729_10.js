'EXC'

'-  Patient who has already received analgesics ( with the exception of paracetamol )'

'-  Patient who has eq(temporal_per(PAST)) drug("analgesics") ( with the except() of drug("paracetamol") )'

drug("analgesics")
    .temporality(
        eq(temporal_per(PAST))
    )
    .except(
        drug("paracetamol")
    )