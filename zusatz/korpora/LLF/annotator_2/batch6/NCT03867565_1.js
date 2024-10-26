'INC'

'-  Minor burn , TBSA < 20 %'

'-  cond("Minor burn") , obs("TBSA") eq(op(LT), val("20"), unit("%"))'

intersect(
    cond("Minor burn"),
    obs("TBSA")
        .num_filter(
            eq(op(LT), val("20"), unit("%"))
        )
)