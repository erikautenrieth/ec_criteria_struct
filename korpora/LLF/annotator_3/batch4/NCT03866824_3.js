'INC'

'-  Joint pain for more than 3 month'

'-  obs("Joint pain") for eq(op(GT), val("3"), temporal_unit(MONTH))'

obs("Joint pain")
    .duration(
        eq(op(GT), val("3"), temporal_unit(MONTH))
    )
