'EXC'

'-  The subject has contralateral amputation , pressure ulcers , severe Obstructive Arteriopathy of Lower Limbs , lymphoedema or thromboembolic event of the lower limb ( ipsilateral and / or contralateral / superficial or deep or detected by post operative Doppler ) .'

'-  The subject has cond("contralateral amputation") , cond("pressure ulcers") , severity(SEVERE) cond("Obstructive Arteriopathy") of mod("Lower Limbs") , cond("lymphoedema") or cond("thromboembolic event") of the mod("lower limb") ( mod("ipsilateral") and / or mod("contralateral") / mod("superficial") or mod("deep") or detected by post proc("operative") proc("Doppler") ) .'


union(
    cond("contralateral amputation"),
    cond("pressure ulcers"),
    cond("Obstructive Arteriopathy")
        .severity(SEVERE)
        .mod("Lower Limbs"),
    seq(
        proc("operative"),
        after(
            union(
                cond("lymphoedema"),
                cond("thromboembolic event")
            )
                .mod("lower limb")  
                .mod("ipsilateral")
                .mod("contralateral")
                .mod("superficial")
                .mod("deep")
        ),
        during(
            proc("Doppler")
        )
    )
)
