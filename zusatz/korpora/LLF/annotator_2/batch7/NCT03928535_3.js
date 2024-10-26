'INC'

'-  Must be treated sequentially with HFNC or NIV after extubation'

'-  Must be treated sequentially with proc("HFNC") or proc("NIV") after proc("extubation")'

seq(
    union(
        proc("HFNC"),
        proc("NIV")
    ),
    after(
        proc("extubation")
    )
)