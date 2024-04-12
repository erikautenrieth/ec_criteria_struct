'INC'

'-  Participants without a history of gastrointestinal disorders ( control group )'

'-  Participants neg() a eq(temporal_per(PAST)) of cond("gastrointestinal disorders") ( control group )'

neg(
    cond("gastrointestinal disorders")
        .temporality(
            eq(temporal_per(PAST))
        )
)