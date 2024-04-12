'INC'

'A .  BIL < 1.25 times normal upper limit ( ULN ) ; B .  ALT and AST < 2.5 ULN; C .  Serum Cr < 1 ULN , endogenous creatinine clearance > 50 ml / min'

'A .  lab("BIL") eq(op(LT), val("1.25"), unit(REF_RANGE_NORMAL)) ; B .  lab("ALT") and lab("AST") eq(op(LT), val("2.5"), unit(REF_RANGE_NORMAL)) ; C .  lab("Serum Cr") eq(op(LT), val("1"), unit(REF_RANGE_NORMAL)) , lab("endogenous creatinine clearance") eq(op(GT), val("50"), unit("ml"), per(MINUTE))'

intersect(
    lab("BIL")
        .num_filter(
            eq(op(LT), val("1.25"), unit(REF_RANGE_NORMAL))
        ),
    union(
        lab("ALT"),
        lab("AST")
    )
        .num_filter(
            eq(op(LT), val("2.5"), unit(REF_RANGE_NORMAL))
        ), 
    lab("Serum Cr")
        .num_filter(
            eq(op(LT), val("1"), unit(REF_RANGE_NORMAL))
        ), 
    lab("endogenous creatinine clearance")
        .num_filter(
            eq(op(GT), val("50"), unit("ml"), per(MINUTE))
        )
)