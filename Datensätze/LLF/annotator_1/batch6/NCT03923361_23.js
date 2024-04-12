'EXC'

'-  Inappropriate for ECT , or poor response to ECT within the past 5 years'

'-  contraindication() for proc("ECT") , or poor response to proc("ECT") eq(op(LTEQ), temporal_per(PAST), val("5"), temporal_unit(YEAR))'

union(
    contraindication(
        proc("ECT")
    ),
    proc("ECT")
        .temporality(
            eq(op(LTEQ), temporal_per(PAST), val("5"), temporal_unit(YEAR))
        )
)