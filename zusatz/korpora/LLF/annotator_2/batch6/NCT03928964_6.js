'EXC'

'1.  Patient previously treated with only one cytokine ( Interferon 2 a , high - dose interleukin - 2 )'

'1.  Patient eq(temporal_per(PAST)) proc() with only eq(val("one")) drug("cytokine") ( drug("Interferon 2 a") , pol(HIGH) - dose drug("interleukin - 2") )'

intersect(
    proc()
        .temporality(
            eq(temporal_per(PAST))
        ),
    drug("cytokine")
        .min_count(
            eq(val("one"))
        )
        .equiv(
            drug("Interferon 2 a"),
            drug("interleukin - 2")
                .pol(HIGH)
        )
)