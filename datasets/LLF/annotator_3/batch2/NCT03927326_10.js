'EXC'

'-  Patients on systemic anticoagulation precluding them from regional blocks'

'-  Patients eq(temporal_per(PRESENT)) mod("systemic") proc("anticoagulation") precluding them from regional blocks'

proc("anticoagulation")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .mod("systemic")