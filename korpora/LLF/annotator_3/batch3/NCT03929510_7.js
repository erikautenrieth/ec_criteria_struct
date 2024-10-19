'EXC'

'-  Participants have a known present or a history of malignancy other than a successfully treated or excised non metastatic basal cell or squamous cell cancer of the skin .'

'-  Participants have a known eq(temporal_per(PRESENT)) or a eq(temporal_per(PAST)) of cond("malignancy") except() a successfully proc() or proc("excised") mod("non metastatic basal cell") or mod("squamous cell") cond("cancer") of the mod("skin") .'

cond("malignancy")
    .temporality(
        or(
            eq(temporal_per(PRESENT)),
            eq(temporal_per(PAST))
        )   
    )
    .except(
        proc(),
        proc("excised")
            .mod("non metastatic basal cell"),
        cond("cancer")
            .mod("squamous cell")
            .mod("skin")
    )
