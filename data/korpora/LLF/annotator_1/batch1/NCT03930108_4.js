'EXC'

'patients referred to other hospital within 30 days after admission'

'patients enc(REFERRAL) to other loc(hosp("hospital")) eq(op(LTEQ), temporal_unit(DAY), val("30")) after enc(INPATIENT)'

seq(
    enc(REFERRAL)
        .loc(hosp("hospital")),
    after(
        enc(INPATIENT)
            .temporality(
                eq(op(LTEQ), temporal_unit(DAY), val("30"))
            )
    )
)