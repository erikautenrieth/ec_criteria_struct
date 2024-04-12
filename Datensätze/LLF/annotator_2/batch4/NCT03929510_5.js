'EXC'

'-  Infection with hepatitis B or hepatitis C viruses .'

'-  cond("Infection with hepatitis B") or cond("hepatitis C viruses") .'

union(
    cond("Infection with hepatitis B"),
    cond("hepatitis C viruses")
)