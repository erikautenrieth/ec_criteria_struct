'EXC'

'patients discharged or deceased less than 24 hours of admission'

'patients enc(DISCHARGE) or death() eq(op(LTEQ), temporal_unit(HOUR), val("24")) of enc(INPATIENT)'

seq(
    enc(INPATIENT),
    after(
        union(
            enc(DISCHARGE),
            death()
        ),
        eq(op(LTEQ), temporal_unit(HOUR), val("24"))
    )
)