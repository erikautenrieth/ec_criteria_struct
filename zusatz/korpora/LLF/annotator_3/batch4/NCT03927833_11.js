'EXC'

'7.  Infant is likely to expire soon : Limiting or withdrawal of intensive care is being recommended to the parents , the parents are requesting withdrawal of care , or the pH is < 6.80 or persistent bradycardia with hypoxemia for > 2 h .'

'7.  child() is risk() to death() soon : Limiting or neg() of proc("intensive care") is indication() to the parents , the parents are requesting withdrawal of care , or the lab("pH") is eq(op(LT), val("6.80")) or cond("persistent bradycardia") with cond("hypoxemia") for eq(op(GT), val("2"), temporal_unit(HOUR)) .'

intersect(
    child(),
    risk(
        death()
    )
)
    .equiv(
        indication(
            neg(
                proc("intensive care")
            )
        ),
        lab("pH")
            .num_filter(
                eq(op(LT), val("6.80"))
            ),
        intersect(
            cond("persistent bradycardia"),
            cond("hypoxemia")
                .duration(
                    eq(op(GT), val("2"), temporal_unit(HOUR))
                )
        )
    )

