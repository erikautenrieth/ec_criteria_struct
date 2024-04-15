'EXC'

'-  Presenting systemic pathology and / or taking medication that may affect the periodontal situation and / or patients requiring antibiotic prophylaxis .'

'-  Presenting mod("systemic") cond("pathology") and / or eq(temporal_per(PRESENT)) drug() that may change() the cond("periodontal situation") and / or patients indication() proc("antibiotic prophylaxis") .'

union(
    cond("periodontal situation")
        .change(),
    indication(
        proc("antibiotic prophylaxis")
    )
)
    .caused_by(
        union(
            cond("pathology")
                .mod("systemic"),
            drug()
                .temporality(
                    eq(temporal_per(PRESENT))
                )
        )        
    )
