'INC'

'1.  ≥ 20 y / o patients with NLCs : ( 1 ) 4 times / week , last 2 weeks; ( 2 ) Occurred in nighttime or resting time of daytime'

'1.  eq(op(GTEQ), val("20"), temporal_unit(YEAR)) age() patients with cond("NLCs") : ( 1 ) eq(val("4"), per(WEEK)) , eq(temporal_per(PAST), val("2"), temporal_unit(WEEK)) ; ( 2 ) Occurred in mod("nighttime") or mod("resting time of daytime")'

intersect(
    age()
        .num_filter(
            eq(op(GTEQ), val("20"), temporal_unit(YEAR))
        ),
    cond("NLCs")
        .num_filter(
            eq(val("4"), per(WEEK))
        )
        .temporality(
            eq(temporal_per(PAST), val("2"), temporal_unit(WEEK))
        )
        .mod("nighttime")
        .mod("resting time of daytime")
)


    