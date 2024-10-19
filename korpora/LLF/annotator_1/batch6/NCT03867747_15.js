'EXC'

'-  Contraindication to radiosurgery ( e . g .  precise target volume definition not possible due to image artifacts created from a left ventricular assist device [ LVAD ] )'

'-  contraindication() to proc("radiosurgery") ( e . g .  precise measurement("target volume definition") not possible due to image artifacts created from a proc("left ventricular assist device") [ proc("LVAD") ] )'

contraindication(
    proc("radiosurgery")
)
.equiv(
    proc("left ventricular assist device")
        .equiv(
            proc("LVAD")
        )
)