'INC'

'-  Appropriate values of blood tests within 6 months after enrollment : Absolute neutrophil count ( ANC ) ≥ 1500 cells / mm 3 Platelets ≥ 50 , 000 cells / mm 3 Hemoglobin ≥ 8.0 g / dl'

'-  pol(NORMAL) of lab("blood tests") eq(op(LTEQ), val("6"), temporal_unit(MONTH)) after enrollment : lab("Absolute neutrophil count") ( lab("ANC") ) eq(op(GTEQ), val("1500"), unit("cells"), unit("mm 3")) lab("Platelets") eq(op(GTEQ), val("50 , 000"), unit("cells"), unit("mm 3")) lab("Hemoglobin") eq(op(GTEQ), val("8.0"), unit("g"), unit("dl"))'

lab("blood tests")
    .pol(NORMAL)
    .temporality(
        eq(op(LTEQ), val("6"), temporal_unit(MONTH))
    )
    .equiv(
        lab("Absolute neutrophil count")
            .equiv(
                lab("ANC")
            )
            .num_filter(
                eq(op(GTEQ), val("1500"), unit("cells"), unit("mm 3"))
            ),
        lab("Platelets")
            .num_filter(
                eq(op(GTEQ), val("50 , 000"), unit("cells"), unit("mm 3"))
            ),
        lab("Hemoglobin")
            .num_filter(
                eq(op(GTEQ), val("8.0"), unit("g"), unit("dl"))
            )
    )