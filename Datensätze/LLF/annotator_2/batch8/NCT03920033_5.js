'INC'

'-  Appropriate values of kidney function within 6 months after enrollment Creatinine < 2.0 ng / dL'

'-  pol(NORMAL) of lab("kidney function") eq(op(LTEQ), val("6"), temporal_unit(MONTH)) after enrollment lab("Creatinine") eq(op(LT), val("2.0"), unit("ng"), unit("dL"))'

intersect(
    lab("kidney function")
        .pol(NORMAL)
        .temporality(
            eq(op(LTEQ), val("6"), temporal_unit(MONTH))
        ),
    lab("Creatinine")
        .num_filter(
            eq(op(LT), val("2.0"), unit("ng"), unit("dL"))
        )
)