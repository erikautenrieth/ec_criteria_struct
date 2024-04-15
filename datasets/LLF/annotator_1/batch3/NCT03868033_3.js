'INC'

'3.  After Denosumab treatment ≥ 2 years due to osteoporosis'

'3.  eq(temporal_per(PAST)) drug("Denosumab") proc() eq(op(GTEQ), val("2"), temporal_unit(YEAR)) due to cond("osteoporosis")'

drug("Denosumab")
    .temporality(
        eq(temporal_per(PAST))
    )
    .duration(
        eq(op(GTEQ), val("2"), temporal_unit(YEAR))
    )
    .for(
        cond("osteoporosis")
    )