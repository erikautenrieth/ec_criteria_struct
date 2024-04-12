'EXC'

'-  The use of analgesics in the preceding 12 hours before the appointment .'

'-  The use of drug("analgesics") in the eq(temporal_per(PAST), val("12"), temporal_unit(HOUR)) before the enc(OUTPATIENT) .'

seq(
    drug("analgesics")
        .temporality(
            eq(temporal_per(PAST), val("12"), temporal_unit(HOUR))
        ),
    before(
        enc(OUTPATIENT)
    )
)