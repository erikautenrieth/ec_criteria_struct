'EXC'

'-  Patients receiving heparin therapy prior to CPB within last 7 days'

'-  Patients eq(temporal_per(PRESENT)) proc("heparin therapy") prior to proc("CPB") eq(op(LTEQ), val("7"), temporal_unit(DAY))'

seq(
    proc("heparin therapy")
        .temporality(
            eq(temporal_per(PRESENT)), eq(op(LTEQ), val("7"), temporal_unit(DAY))
        ),
    before(
        proc("CPB")
    )
)