'INC'

'-  No history of mucogingival or periodontal surgery at experimental sites .'

'-  neg() eq(temporal_per(PAST)) of mod("mucogingival") or mod("periodontal") proc("surgery") at mod("experimental sites") .'

neg(
    proc("surgery")
        .temporality(
            eq(temporal_per(PAST))
        )
        .mod("mucogingival")
        .mod("periodontal")
        .mod("experimental sites")
)