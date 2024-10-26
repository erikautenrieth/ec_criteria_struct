'INC'

'3.  Sedentary ( exercises less than three times a week for thirty minutes or less ) .'

'3.  obs("Sedentary") ( social_habit("exercises") eq(op(LT), val("three"), per(WEEK)) for eq(val("thirty"), temporal_unit(MINUTE), op(LTEQ)) ) .'

obs("Sedentary")
    .equiv(
        social_habit("exercises")
            .temporality(
                eq(op(LT), val("three"), per(WEEK))
            )
            .duration(
                eq(val("thirty"), temporal_unit(MINUTE), op(LTEQ))
            )
    )

