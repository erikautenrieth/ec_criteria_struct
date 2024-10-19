'EXC'

'-  Prisoners or any other high - risk population group .'

'-  obs("Prisoners") or any other pol(HIGH) - risk() population group .'

union(
    obs("Prisoners"),
    risk()
        .pol(HIGH)
)
