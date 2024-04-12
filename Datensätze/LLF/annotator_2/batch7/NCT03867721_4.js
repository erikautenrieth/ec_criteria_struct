'EXC'

'-  patients with ineffective NIV during sleep as assessed by the measurement of TcCO 2 > 49 mmHg ( S )'

'-  patients with mod("ineffective") proc("NIV") during obs("sleep") as assessed by the measurement of obs("TcCO 2") eq(op(GT), val("49"), unit("mmHg")) ( S )'

seq(
    proc("NIV")
        .mod("ineffective")
        .found_by(
            obs("TcCO 2")
                .num_filter(
                    eq(op(GT), val("49"), unit("mmHg"))
                )
        ),
    during(
        obs("sleep")
    )
)