'EXC'

'6.  CD 4 count < 200 / mm 3 during Screening .'

'6.  lab("CD 4 count") eq(op(LT), val("200"), unit("mm 3")) during Screening .'

lab("CD 4 count")
    .num_filter(
        eq(op(LT), val("200"), unit("mm 3"))
    )