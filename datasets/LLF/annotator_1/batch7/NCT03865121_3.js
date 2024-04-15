'INC'

'-  Not exposed to tobacco during any stage of their life'

'-  neg() cond("exposed to tobacco") during eq(temporal_per(ANYTIME))'

neg(
    cond("exposed to tobacco")
        .temporality(
            eq(temporal_per(ANYTIME))
        )

)