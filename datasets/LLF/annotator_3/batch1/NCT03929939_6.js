'EXC'

'2.  Chronic kidney disease ( serum creatinine > 1.5 mg / dL ) .'

'2.  chronic() cond("kidney disease") ( lab("serum creatinine") eq(op(GT), val("1.5"), unit("mg"), unit("dL")) ) .'

cond("kidney disease")
    .chronic()
    .equiv(
        lab("serum creatinine")
            .num_filter(
                eq(op(GT), val("1.5"), unit("mg"), unit("dL"))
            )
    )
