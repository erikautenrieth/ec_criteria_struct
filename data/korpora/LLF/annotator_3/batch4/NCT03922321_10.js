'EXC'

'4.  Absolute neutrophil count < 1500 cells / mm 3 at Screening .'

'4.  lab("Absolute neutrophil count") eq(op(LT), val("1500"), unit("cells"), unit("mm 3")) at Screening .'

lab("Absolute neutrophil count")
    .num_filter(
        eq(op(LT), val("1500"), unit("cells"), unit("mm 3"))
    )