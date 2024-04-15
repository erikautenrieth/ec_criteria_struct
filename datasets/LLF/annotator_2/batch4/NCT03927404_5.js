'INC'

'-  5. Residual limb length greater than 6.5 inches in length'

'-  5. measurement("Residual limb length") eq(op(GT), val("6.5"), unit("inches")) in length'

measurement("Residual limb length")
    .num_filter(
        eq(op(GT), val("6.5"), unit("inches"))
    )