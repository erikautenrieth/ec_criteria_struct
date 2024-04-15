'EXC'

'-  Recurrent perforation after previous myringoplasty .'

'-  cond("Recurrent perforation") after eq(temporal_per(PAST)) proc("myringoplasty") .'

proc("myringoplasty")
    .eq(temporal_per(PAST))
    .cond("Recurrent perforation")
