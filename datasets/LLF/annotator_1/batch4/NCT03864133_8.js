'EXC'

'-  Macular thickness above 300 microns at baseline'

'-  measurement("Macular thickness") eq(op(GT), val("300"), unit("microns")) at baseline'

measurement("Macular thickness")
    .num_filter(
        eq(op(GT), val("300"), unit("microns"))
    )