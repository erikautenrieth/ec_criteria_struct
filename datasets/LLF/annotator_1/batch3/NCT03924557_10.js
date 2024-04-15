'EXC'

'-  Patients planned to undergo cancer therapy other than chemotherapy ( i . e . , radiation , surgery or hormonal treatment alone )'

'-  Patients eq(temporal_per(FUTURE)) cond("cancer") proc("therapy") except() proc("chemotherapy") ( i . e . , proc("radiation") , proc("surgery") or proc("hormonal treatment") alone )'

proc("therapy")
    .temporality(
        eq(temporal_per(FUTURE))
    )
    .for(
        cond("cancer")
    )
    .except(
        proc("chemotherapy")
    )
    .equiv(
        proc("radiation"),
        proc("surgery"),
        proc("hormonal treatment")
    )

