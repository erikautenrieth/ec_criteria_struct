'EXC'

'-  Non - infectious hypothermia / hyperthermia ( e . g .  related to epidural , thyroid storm , prostaglandin administration ) during hospital stay'

'-  mod("Non - infectious") cond("hypothermia") / cond("hyperthermia") ( e . g .  related to proc("epidural") , cond("thyroid storm") , drug("prostaglandin") administration ) during enc(INPATIENT)'

seq(
    union(
        cond("hypothermia"),
        cond("hyperthermia")
    )
        .mod("Non - infectious")
        .caused_by(
            proc("epidural"),
            cond("thyroid storm"),
            drug("prostaglandin")
        ),
    during(
        enc(INPATIENT)
    )
)