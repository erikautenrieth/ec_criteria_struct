'INC'

'-  Do not have first positive CRE culture within 48 hours of admission'

'-  Do neg() have eq(temporal_rec(FIRST_TIME)) pol(POSITIVE) org("CRE culture") eq(op(LTEQ), val("48"), temporal_unit(HOUR)) of enc(INPATIENT)'

seq(
    enc(INPATIENT),
    after(
        neg(
            org("CRE culture")
                .pol(POSITIVE)
        ),
        eq(temporal_rec(FIRST_TIME)), eq(op(LTEQ), val("48"), temporal_unit(HOUR))
    )
)