'EXC'

'-  Subjects with hemoglobin Hb < 12 g / dl ( at screening )'

'-  Subjects with lab("hemoglobin Hb") eq(op(LT), val("12"), unit("g"), unit("dl")) ( at screening )'

lab("hemoglobin Hb")
    .num_filter(
        eq(op(LT), val("12"), unit("g"), unit("dl"))
    )