'INC'

'2.  induction of symptomatic monomorphic ventricular tachycardia that requires ICD intervention ( e . g .  shock or anti - tachycardia stimulation ) .  Induction triggered by ICD or during electrophysiology studies ( EPS ) or both , a ) and b )'

'2.  proc("induction") of possible() cond("monomorphic ventricular tachycardia") that requires ICD intervention ( e . g .  shock or anti - tachycardia stimulation ) .  Induction triggered by ICD or during electrophysiology studies ( EPS ) or both , a ) and b )'

cond("monomorphic ventricular tachycardia")
    .possible()
    .caused_by(
        proc("induction")
    )