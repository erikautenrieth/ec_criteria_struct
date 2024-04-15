'EXC'

'4.  TSB reported as > 6.0 mg / dL before 12 hours age'

'4.  lab("TSB") reported as eq(op(GT), val("6.0"), unit("mg"), unit("dL")) before eq(val("12"), temporal_unit(HOUR)) age()'

seq(
    lab("TSB")
        .num_filter(
            eq(val("12"), temporal_unit(HOUR))
        ), 
    before(
        age()
            .num_filter(
                eq(op(GT), val("6.0"), unit("mg"), unit("dL"))
            )
    )
)