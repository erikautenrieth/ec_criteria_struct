'EXC'

'-  Scheduled elective surgery or other procedures requiring general anaesthesia during clinical investigation'

'-  eq(temporal_per(FUTURE)) mod("elective") proc("surgery") or other proc() indication() proc("general anaesthesia") during clinical investigation'

intersect(
    union(
        proc("surgery")
            .mod("elective"),
        proc()
    )
        .temporality(
            eq(temporal_per(FUTURE))
        ),
    indication(
        proc("general anaesthesia")
    )
)