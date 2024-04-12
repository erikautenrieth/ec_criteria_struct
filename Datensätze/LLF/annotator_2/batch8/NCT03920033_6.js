'INC'

'-  Appropriate values of liver function within 6 months after enrollment total bilirubin < 1.5 X maximum normal value alanine aminotransferase or aspartate aminotransferase < 2.5 X maximum normal value'

'-  pol(NORMAL) of lab("liver function") eq(op(LTEQ), val("6"), temporal_unit(MONTH)) after enrollment lab("total bilirubin") eq(op(LT), val("1.5"), unit(REF_RANGE_NORMAL)) lab("alanine aminotransferase") or lab("aspartate aminotransferase") eq(op(LT), val("2.5"), unit(REF_RANGE_NORMAL))'

lab("liver function")
    .pol(NORMAL)
    .equiv(
        intersect(
            lab("total bilirubin")
                .num_filter(
                    eq(op(LT), val("1.5"), unit(REF_RANGE_NORMAL))
                ),
            union(
                lab("alanine aminotransferase"),
                lab("aspartate aminotransferase")
            )
                .num_filter(
                    eq(op(LT), val("2.5"), unit(REF_RANGE_NORMAL))
                )
        )
    )