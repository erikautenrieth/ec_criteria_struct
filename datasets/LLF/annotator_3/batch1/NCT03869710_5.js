'EXC'

'-  Body Mass Index > 39'

'-  vital("Body Mass Index") eq(op(GT), val("39"))'

vital("Body Mass Index")
    .num_filter(
        eq(op(GT), val("39"))
    )