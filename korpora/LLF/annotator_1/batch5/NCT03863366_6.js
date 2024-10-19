'EXC'

'-  Current usage of psychoactive medication ( except the contraceptive pill , the Depo - Provera injection or the progesterone implant )'

'-  eq(temporal_per(PRESENT)) usage of drug("psychoactive medication") ( except() the drug("contraceptive pill") , the drug("Depo - Provera") injection or the proc("progesterone implant") )'

drug("psychoactive medication")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .except(
        drug("contraceptive pill"),
        drug("Depo - Provera"),
        proc("progesterone implant")
    )