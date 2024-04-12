'INC'

'2.  All treated patients had a rising post - treatment PSA , with at least one post - treatment free PSA blood test .'

'2.  All treated patients had a pol(HIGH) post - proc() lab("PSA") , with eq(op(GTEQ), val("one")) post - proc() free lab("PSA blood test") .'

intersect(
    seq(
        proc(), 
        after(
            lab("PSA")
                .pol(HIGH)
        )
    ),
    seq(
        proc(), 
        after(
            lab("PSA blood test")
                .min_count(
                    eq(op(GTEQ), val("one"))
                )
        )
    )
)
