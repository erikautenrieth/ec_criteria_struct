'EXC'

'-  Body mass index exceeding 30 kg / m 2 ;'

'-  vital("Body mass index") eq(op(GT), val("30"), unit("kg"), unit("m 2")) ;'

vital("Body mass index")
    .num_filter(
        eq(op(GT), val("30"), unit("kg"), unit("m 2"))
    )