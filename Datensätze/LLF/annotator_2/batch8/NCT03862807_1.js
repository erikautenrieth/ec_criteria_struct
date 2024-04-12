'INC'

'-  Received liver transplant for treatment of hATTR amyloidosis ≥ 12 months before study start'

'-  eq(temporal_per(PAST)) proc("liver transplant") for proc() of mod("hATTR") cond("amyloidosis") eq(op(GTEQ), val("12"), temporal_unit(MONTH)) before study start'


proc("liver transplant")
    .temporality(
        eq(temporal_per(PAST))
    )
    .for(
        proc()
            .for(
                cond("amyloidosis")
                    .mod("hATTR")
                    .temporality(
                        eq(op(GTEQ), val("12"), temporal_unit(MONTH))
                    )
            )
    )