'INC'

'-  Either have had more than 3 ED visits in the prior 12 months , or at least 1 ambulatory care - sensitive hospitalization in the prior 12 months'

'-  Either have had eq(op(GT), val("3")) enc(EMERGENCY) in the eq(temporal_per(PAST), val("12"), temporal_unit(MONTH)) , or eq(op(GTEQ), val("1")) mod("ambulatory care - sensitive") enc(INPATIENT) in the eq(temporal_per(PAST), val("12"), temporal_unit(MONTH))'

union(
    enc(EMERGENCY)
        .min_count(
            eq(op(GT), val("3"))
        )
        .temporality(
            eq(temporal_per(PAST), val("12"), temporal_unit(MONTH))
        ),
    enc(INPATIENT)
        .num_filter(
            eq(op(GTEQ), val("1"))
        )
        .mod("ambulatory care - sensitive")
        .temporality(
            eq(temporal_per(PAST), val("12"), temporal_unit(MONTH))
        )
)