'EXC'

'-  Receiving OMM from a licensed physician , chiropractic treatment , or massage therapy for 30 days prior to and during the study'

'-  eq(temporal_per(PRESENT)) drug("OMM") from a licensed physician , proc("chiropractic treatment") , or proc("massage therapy") for eq(val("30"), temporal_unit(DAY)) prior to and during the study'

union(
    drug("OMM")
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    proc("chiropractic treatment"),
    proc("massage therapy")
)
    .temporality(
        eq(val("30"), temporal_unit(DAY))
    )