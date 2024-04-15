'EXC'

'6.  Planned change in the external ventricular drain set point during the pre - intervention , intervention or post - intervention periods'

'6.  eq(temporal_per(FUTURE)) change() in the proc("external ventricular drain") mod("set point") during the pre - proc("intervention") , proc("intervention") or post - proc("intervention") periods'

seq(
    proc("external ventricular drain")
        .temporality(
            eq(temporal_per(FUTURE))
        )
        .change()
        .mod("set point"),
    during(
        union(
            proc("intervention"),
            proc("intervention"),
            proc("intervention")
        )
    )
)