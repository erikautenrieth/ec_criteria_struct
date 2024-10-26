'INC'

'-  Body mass Index > 30'

'-  vital("Body mass Index") eq(op(GT), val("30"))'

vital("Body mass Index")
    .num_filter(
        eq(op(GT), val("30"))
    )