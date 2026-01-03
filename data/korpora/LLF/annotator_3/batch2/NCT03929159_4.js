'INC'

'-  Leukocytes > 12 , 000 / mm^ 3 or < 4 , 000 / mm^ 3 or > 10 % immature ( band ) forms , provided that no filgrastim or pegfilgrastim was administered within 30 days and no leukemia'

'-  lab("Leukocytes") eq(op(GT), val("12 , 000"), unit("mm^ 3")) or eq(op(LT), val("4 , 000"), unit("mm^ 3")) or eq(op(GT), val("10"), unit("%")) lab("immature ( band ) forms") , provided that neg() drug("filgrastim") or drug("pegfilgrastim") was eq(temporal_per(PAST)) eq(op(LTEQ), val("30"), temporal_unit(DAY)) and neg() cond("leukemia")'

intersect(
    union(
        lab("Leukocytes")
            .num_filter(
                or(
                    eq(op(GT), val("12 , 000"), unit("mm^ 3")),
                    eq(op(LT), val("4 , 000"), unit("mm^ 3"))
                )
            ),
        lab("immature ( band ) forms")
            .num_filter(
                eq(op(GT), val("10"), unit("%"))
            )
    ),
    neg(
        union(
            drug("filgrastim"),
            drug("pegfilgrastim")
        )
            .temporality(
                and(
                    eq(temporal_per(PAST)),
                    eq(op(LTEQ), val("30"), temporal_unit(DAY))
                )
            )
    ),
    neg(
        cond("leukemia")
    )
)
