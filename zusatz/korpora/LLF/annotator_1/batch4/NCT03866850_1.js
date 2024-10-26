'INC'

'-  Cochlear Nucleus cochlear implant users or Advanced Bionics cochlear implant users'

'-  mod("Cochlear Nucleus") proc("cochlear implant") users or mod("Advanced Bionics") proc("cochlear implant") users'

union(
    proc("cochlear implant")
        .mod("Cochlear Nucleus"), 
    proc("cochlear implant")
        .mod("Advanced Bionics")
)