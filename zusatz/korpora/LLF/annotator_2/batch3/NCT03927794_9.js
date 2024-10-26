'EXC'

'-  Subjects with evidence of reduced salivary flow ( > 60 sec ) or with acidic saliva pH < 5.8 .'

'-  Subjects with evidence of pol(LOW) measurement("salivary flow") ( eq(op(GT), val("60"), temporal_unit(SECOND)) ) or with mod("acidic") lab("saliva pH") eq(op(LT), val("5.8")) .'

union(
    measurement("salivary flow")
        .pol(LOW)
        .num_filter(
            eq(op(GT), val("60"), temporal_unit(SECOND))
        ),
    lab("saliva pH")
        .mod("acidic")
        .num_filter(
            eq(op(LT), val("5.8"))
        )
)