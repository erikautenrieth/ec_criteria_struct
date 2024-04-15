'EXC'

'-  No prior improvement in symptoms and histology with budesonide therapy'

'-  neg() eq(temporal_per(PAST)) improvement in symptoms and proc("histology") with proc("budesonide therapy")'

neg(
    intersect(
        proc("histology")
            .temporality(
                eq(temporal_per(PAST))
            ),
        proc("budesonide therapy")
    )
)