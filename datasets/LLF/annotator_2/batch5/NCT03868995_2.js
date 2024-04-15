'INC'

'2.  Chronic ankle sprain more than 3 months with chronic ankle pain or instability sensation'

'2.  chronic() mod("ankle") cond("sprain") eq(op(GT), val("3"), temporal_unit(MONTH)) with chronic() mod("ankle") obs("pain") or mod("instability") cond("sensation")'

intersect(
    cond("sprain")
        .chronic()
        .mod("ankle")
        .duration(
            eq(op(GT), val("3"), temporal_unit(MONTH))
        ),
    union(
        obs("pain")
            .chronic()
            .mod("ankle"),
        cond("sensation")
            .mod("instability")
    )
)