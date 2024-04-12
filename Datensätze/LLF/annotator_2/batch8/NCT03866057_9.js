'EXC'

'- Stroke occurred more than 30 days after the transfer to intensive rehabilitation'

'- cond("Stroke") occurred eq(op(GT), val("30"), temporal_unit(DAY)) after the enc(TRANSFER) to loc(unit("intensive rehabilitation"))'

seq(
    cond("Stroke"),
    after(
        enc(TRANSFER)
            .temporality(
                eq(op(GT), val("30"), temporal_unit(DAY))
            )
            .loc(unit("intensive rehabilitation"))
    )
)