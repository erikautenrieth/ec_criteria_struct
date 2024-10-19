'INC'

'-  Pain > 4 on a visual numerical scale'

'-  obs("Pain") eq(op(GT), val("4")) on a visual numerical scale'

obs("Pain")
    .num_filter(
        eq(op(GT), val("4"))
    )