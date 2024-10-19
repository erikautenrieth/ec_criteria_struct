'INC'

'-  if former smoker , quit smoking within the last 15 years'

'-  if eq(temporal_per(PAST)) obs("smoker") , neg() obs("smoking") eq(op(LTEQ), temporal_per(PAST), val("15"), temporal_unit(YEAR))'

if_then(
    obs("smoker")
        .temporality(
            eq(temporal_per(PAST))
        ),
    neg(
        obs("smoking")
            .temporality(
                eq(op(LTEQ), temporal_per(PAST), val("15"), temporal_unit(YEAR))
            )
    )
)