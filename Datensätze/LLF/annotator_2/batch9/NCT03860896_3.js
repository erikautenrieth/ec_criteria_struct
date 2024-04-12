'EXC'

'-  Evidence of Crohn\'s disease , indeterminate colitis , or presence of bacterial or parasitic infection .'

'-  Evidence of cond("Crohn\'s disease") , cond("indeterminate colitis") , or presence of mod("bacterial") or mod("parasitic") cond("infection") .'

union(
    cond("Crohn\'s disease"),
    cond("indeterminate colitis"),
    cond("infection")
        .mod("bacterial")
        .mod("parasitic")
)
