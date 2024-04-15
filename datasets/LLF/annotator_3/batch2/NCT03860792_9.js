'EXC'

'-  A potentially confounding serious medical risk including insulin - requiring diabetes , cancer requiring chemotherapy or radiation within the past 5 years , or a recent cardiac event ( i . e .  heart attack , angioplasty , etc . )'

'-  A potentially change() severity(SEVERE) medical risk() including drug("insulin") - requiring cond("diabetes") , cond("cancer") indication() proc("chemotherapy") or proc("radiation") eq(op(LTEQ), temporal_per(PAST), val("5"), temporal_unit(YEAR)) , or a eq(temporal_per(RECENT)) cond("cardiac event") ( i . e .  cond("heart attack") , proc("angioplasty") , etc . )'

risk()
    .equiv(
        drug("insulin")
            .for(
                cond("diabetes")
            ),
        indication(
            proc("chemotherapy"),
            proc("radiation")
        )
            .for(
                cond("cancer")
            )
            .temporality(
                eq(op(LTEQ), temporal_per(PAST), val("5"), temporal_unit(YEAR))
            ),
        cond("cardiac event")
            .temporality(
                eq(temporal_per(RECENT))
            )
            .equiv(
                cond("heart attack"),
                proc("angioplasty")
            )
    )