'EXC'

'7.  An absolute neutrophil count of < 1000 cells / µL during Screening .'

'7.  An lab("absolute neutrophil count") of eq(op(LT), val("1000"), unit("cells"), unit("µL")) during Screening .'

lab("absolute neutrophil count")
    .num_filter(
        eq(op(LT), val("1000"), unit("cells"), unit("µL"))
    )