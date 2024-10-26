'INC'

'2.  Biochemical tests should meet the following criteria : A. BIL < 1.25 times normal upper limit ( ULN ) ; B. ALT and AST < 2.5 ULN ; C. Serum Cr < 1 ULN , endogenous creatinine clearance > 50 ml / min'

'2.  Biochemical tests should meet criteria() : A. lab("BIL") eq(op(LT), val("1.25"), unit(REF_RANGE_NORMAL)) ( ULN ) ; B. lab("ALT") and lab("AST") eq(op(LT), val("2.5"), unit(REF_RANGE_NORMAL)) ; C. lab("Serum Cr") eq(op(LT), val("1"), unit(REF_RANGE_NORMAL)) , lab("endogenous creatinine clearance") eq(op(GT), val("50"), unit("ml"), per(MINUTE))'

criteria(
    lab("BIL")
        .num_filter(
            eq(op(LT), val("1.25"), unit(REF_RANGE_NORMAL))
        ),
    intersect(
        lab("ALT"),
        lab("AST")
    )
        .num_filter(
            eq(op(LT), val("2.5"), unit(REF_RANGE_NORMAL))
        ),
    intersect(
        lab("Serum Cr")
            .num_filter(
                eq(op(LT), val("1"), unit(REF_RANGE_NORMAL))
            ),
        lab("endogenous creatinine clearance")
            .num_filter(
                eq(op(GT), val("50"), unit("ml"), per(MINUTE))
            )
    )
)


