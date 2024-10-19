'EXC'

'-  Women who are pregnant ( positive result for serum pregnancy test at screening visit ) , women who are currently nursing or lactating , women that have been pregnant within 2 years'

'-  female() who are cond("pregnant") ( pol(POSITIVE) result for lab("serum pregnancy test") at screening visit ) , female() who are eq(temporal_per(PRESENT)) cond("nursing") or cond("lactating") , female() that eq(temporal_per(PAST)) cond("pregnant") eq(op(LTEQ), val("2"), temporal_unit(YEAR))'

union(
    intersect(
        female(),
        cond("pregnant")
            .equiv(
                lab("serum pregnancy test")
                    .pol(POSITIVE)
            )
    ),
    intersect(
        female(),
        union(
            cond("nursing"),
            cond("lactating")
        )
        .temporality(
            eq(temporal_per(PRESENT))
        )
    ),
    intersect(
        female(),
        cond("pregnant")
            .temporality(
                eq(op(LTEQ), val("2"), temporal_unit(YEAR))
            )
    )
)