'EXC'

'-  Tooth extraction or invasive dental procedures within the past 30 days or planned / scheduled extraction / procedure in the next 12 months'

'-  proc("Tooth extraction") or mod("invasive") proc("dental procedures") eq(op(LTEQ), temporal_per(PAST), val("30"), temporal_unit(DAY)) or eq(temporal_per(FUTURE)) / eq(temporal_per(FUTURE)) proc("extraction") / proc() in the eq(temporal_per(FUTURE), val("12"), temporal_unit(MONTH))'

union(
    union(
        proc("Tooth extraction"),
        proc("dental procedures")
            .mod("invasive")
    )
        .temporality(
            eq(op(LTEQ), temporal_per(PAST), val("30"), temporal_unit(DAY))
        ),
    union(
        proc("extraction"),
        proc()
    )
        .temporality(
            eq(temporal_per(FUTURE))
        )
        .num_filter(
            eq(temporal_per(FUTURE), val("12"), temporal_unit(MONTH))
        )
)
