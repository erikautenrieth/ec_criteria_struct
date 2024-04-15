'EXC'

'4.  Inhalation of β 2 - receptor activator , M - receptor blockers and / or glucocorticoids within one month before surgery ;'

'4.  Inhalation of drug("β 2 - receptor activator") , drug("M - receptor blockers") and / or drug("glucocorticoids") eq(op(LTEQ), val("one"), temporal_unit(MONTH)) before proc("surgery") ;'

seq(
    union(
        drug("β 2 - receptor activator"),
        drug("M - receptor blockers"),
        drug("glucocorticoids")
    ),
    before(
        proc("surgery")
            .temporality(
                eq(op(LTEQ), val("one"))
            )
    )
)