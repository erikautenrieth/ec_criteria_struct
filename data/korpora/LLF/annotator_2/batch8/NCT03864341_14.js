'EXC'

'-  Has already received specialized peer navigator / addiction social worker services during current ED visit .'

'-  Has eq(temporal_per(PAST)) specialized mod("peer navigator") / mod("addiction") proc("social worker services") during current enc(EMERGENCY) .'

seq(
    proc("social worker services")
        .temporality(
            eq(temporal_per(PAST))
        )
        .mod("peer navigator")
        .mod("addiction"),
    during(
        enc(EMERGENCY)
    )
)