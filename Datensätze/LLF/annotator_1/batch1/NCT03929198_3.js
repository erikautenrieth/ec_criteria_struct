'INC'

'-  Systolic blood pressure ≥ 130 mmHg OR diastolic blood pressure ≥ 80 mmHg ( or on hypertension medication )'

'-  vital("Systolic blood pressure") eq(op(GTEQ), val("130"), unit("mmHg")) OR vital("diastolic blood pressure") eq(op(GTEQ), val("80"), unit("mmHg")) ( or eq(temporal_per(PRESENT)) cond("hypertension") drug() )'

union(
    vital("Systolic blood pressure")
        .num_filter(
            eq(op(GTEQ), val("130"), unit("mmHg"))
        ), 
    vital("diastolic blood pressure")
        .num_filter(
            eq(op(GTEQ), val("80"), unit("mmHg"))
        ), 
    drug()
        .for(
            cond("hypertension")
        )
        .temporality(
            eq(temporal_per(PRESENT))
        )
)