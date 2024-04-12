'EXC'

'-  Contraindications to MRI ( claustrophobia , intraocular metal foreign bodies , pacemaker , neurostimulator , cochlear implants , old heart valves )'

'-  contraindication() to proc("MRI") ( cond("claustrophobia") , mod("intraocular") cond("metal foreign bodies") , proc("pacemaker") , proc("neurostimulator") , proc("cochlear implants") , mod("old") proc("heart valves") )'

contraindication(
    proc("MRI")
)
.equiv(
    cond("claustrophobia"),
    cond("metal foreign bodies")
        .mod("intraocular"),
    proc("pacemaker"),
    proc("neurostimulator"),
    proc("cochlear implants"),
    proc("heart valves")
        .mod("old")

)