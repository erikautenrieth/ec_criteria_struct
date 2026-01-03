'EXC'

'-  Smoking within 60 days prior to drug administration and through the follow - up visit'

'-  obs("Smoking") eq(op(LTEQ), val("60"), temporal_unit(DAY)) prior to drug() and through the enc(OUTPATIENT)'

seq(
    obs("Smoking")
        .num_filter(
            eq(op(LTEQ), val("60"), temporal_unit(DAY))
        ),
    before(
        drug()
    ),
    during(
        enc(OUTPATIENT)
    )
)
