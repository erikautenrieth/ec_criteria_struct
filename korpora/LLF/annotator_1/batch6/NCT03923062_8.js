'EXC'

'-  Subjects with history of medical diseases which contraindicate cryosurgery such as; cold intolerance , cold urticaria , Raynaud`s disease and history of allergic reactions to cryosurgery .'

'-  Subjects with eq(temporal_per(PAST)) of cond() which contraindication() proc("cryosurgery") such as; cond("cold intolerance") , cond("cold urticaria") , cond("Raynaud`s disease") and eq(temporal_per(PAST)) of allergy() reactions to proc("cryosurgery") .'

contraindication(
    proc("cryosurgery")
)
.caused_by(
    cond()
        .temporality(
            eq(temporal_per(PAST))
        )
)
.equiv(
    cond("cold intolerance"),
    cond("cold urticaria"),
    cond("Raynaud`s disease"),
    allergy(
        proc("cryosurgery")
    )
        .temporality(
            eq(temporal_per(PAST))
        )
)