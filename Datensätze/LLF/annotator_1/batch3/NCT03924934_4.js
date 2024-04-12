'INC'

'-  First positive CRE culture within 48 hours of admission ( in case of hospitalization )'

'-  eq(temporal_rec(FIRST_TIME)) pol(POSITIVE) org("CRE culture") eq(op(LTEQ), val("48"), temporal_unit(HOUR), enc(INPATIENT)) of enc(INPATIENT) ( in case of enc(INPATIENT) )'

seq(
    enc(INPATIENT),
    after(
        org("CRE culture")
            .temporality(
                eq(temporal_rec(FIRST_TIME))
            )
            .pol(POSITIVE),
        eq(op(LTEQ), val("48"), temporal_unit(HOUR))
    )
)