'INC'

'- Body mass index between 18 and 30 kg / m2'

'- vital("Body mass index") eq(op(BETWEEN), val("18"), val("30"), unit("kg"), per("m2"))'

vital("Body mass index")
    .num_filter(
        eq(op(BETWEEN), val("18"), val("30"), unit("kg"), per("m2"))
    )