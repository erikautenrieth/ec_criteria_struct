'EXC'

'-  history of angioedema after treatment with angiotensin - converting enzyme inhibitors or ARBs; creatinine phosphokinase levels ≥ 3 times the upper limit of normal'

'-  eq(temporal_per(PAST)) of cond("angioedema") after proc() with drug("angiotensin - converting enzyme inhibitors") or drug("ARBs") ; lab("creatinine phosphokinase") levels eq(op(GTEQ), val("3"), unit(REF_RANGE_NORMAL))'

union(
    seq(
        cond("angioedema")
            .temporality(
                eq(temporal_per(PAST))
            ),
        after(
            intersect(
                proc()
                    .equiv(
                        drug("angiotensin - converting enzyme inhibitors"),
                        drug("ARBs")
                    )
            )
        )
    ),
    lab("creatinine phosphokinase")
        .num_filter(
            eq(op(GTEQ), val("3"), unit(REF_RANGE_NORMAL))
        )
)