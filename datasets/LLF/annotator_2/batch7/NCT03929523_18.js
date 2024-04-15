'EXC'

'-  Grafts donated after cardiac arrest ( DCD grafts )'

'-  obs("Grafts donated") after cond("cardiac arrest") ( obs("DCD grafts") )'

seq(
    obs("Grafts donated"),
    after(
        cond("cardiac arrest")
    )
)
    .equiv(
        obs("DCD grafts")
    )
