'INC'

'-  Subject did not participate in any exercise program within the last three months .'

'-  Subject did neg() participate in any proc("exercise program") eq(op(LTEQ), temporal_per(PAST), val("three"), temporal_unit(MONTH)) .'

neg(
    proc("exercise program")
        .temporality(
            eq(op(LTEQ), temporal_per(PAST), val("three"), temporal_unit(MONTH))
        ) 
)

       