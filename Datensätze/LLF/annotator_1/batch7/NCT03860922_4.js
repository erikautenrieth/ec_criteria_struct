'EXC'

'2.  Patients with contraindications for MRI , e . g .  an implanted magnetic device , pacemakers or claustrophobia .'

'2.  Patients with contraindication() for proc("MRI") , e . g .  an proc("implanted magnetic device") , proc("pacemakers") or cond("claustrophobia") .'

contraindication(
    proc("MRI")
)
.equiv(
    proc("implanted magnetic device"),
    proc("pacemakers"),
    cond("claustrophobia")
)