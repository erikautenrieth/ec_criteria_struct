'EXC'

'-  Self - reported smoker or carbon monoxide concentration ≥ 6 ppm'

'-  Self - reported obs("smoker") or lab("carbon monoxide concentration") eq(op(GTEQ), val("6"), unit("ppm"))'

union(
    obs("smoker"), 
    lab("carbon monoxide concentration")
        .num_filter(
            eq(op(GTEQ), val("6"), unit("ppm"))
        )
)