'EXC'

'-  Children having allergy to local anaesthesia or systemic problem .  Refusal of participation Mentally ill or mentally retarded children'

'-  child() having allergy() to proc("local anaesthesia") or mod("systemic") cond("problem") .  Refusal of participation cond("Mentally ill") or cond("mentally retarded") child()'

union(
    intersect(
        child(),
        allergy(
            union(
                proc("local anaesthesia"),
                cond("problem")
                    .mod("systemic")
            )
        )
    ),
    intersect(
        union(
            cond("Mentally ill"),
            cond("mentally retarded")
        ),
        child()
    )
)