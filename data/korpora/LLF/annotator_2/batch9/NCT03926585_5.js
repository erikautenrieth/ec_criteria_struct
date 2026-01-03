'EXC'

'-  Initiation of L - thyroxine treatment in patients with s - TSH below upper normal limit ( with assay in current use , that is TSH < 4 mU / L )'

'-  eq(temporal_rec(FIRST_TIME)) of drug("L - thyroxine") proc() in patients with lab("s - TSH") eq(op(LT), unit(REF_RANGE_LOW)) ( with assay in current use , that is lab("TSH") eq(op(LT), val("4"), unit("mU"), unit("L")) )'

intersect(
    intersect(
        proc(),
        drug("L - thyroxine")
    )
        .temporality(
            eq(temporal_rec(FIRST_TIME))
        ),
    lab("s - TSH")
        .num_filter(
            eq(op(LT), unit(REF_RANGE_LOW))
        )
        .equiv(
            lab("TSH")
                .num_filter(
                    eq(op(LT), val("4"), unit("mU"), unit("L"))
                )
        )
)   