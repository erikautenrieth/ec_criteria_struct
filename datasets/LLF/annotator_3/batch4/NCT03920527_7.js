'EXC'

'-  patients on immunosuppressive drugs , intake of prednisolone ( or equivalent ) > 10 mg for at least 3 weeks or a diagnosis of human immunodeficiency virus syndrome'

'-  patients eq(temporal_per(PRESENT)) drug("immunosuppressive drugs") , intake of drug("prednisolone") ( or equivalent ) eq(op(GT), val("10"), unit("mg")) for eq(op(GTEQ), val("3"), temporal_unit(WEEK)) or a diagnosis of cond("human immunodeficiency virus syndrome")'

union(
    drug("immunosuppressive drugs")
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    drug("prednisolone")
        .num_filter(
            eq(op(GT), val("10"), unit("mg"))
        )
        .temporality(
            eq(op(GTEQ), val("3"), temporal_unit(WEEK))
        ),
    cond("human immunodeficiency virus syndrome")
)
