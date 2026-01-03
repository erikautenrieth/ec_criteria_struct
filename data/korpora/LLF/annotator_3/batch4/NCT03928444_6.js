'EXC'

'-  Any coincidental chronic illness ( e . g .  metabolic , autoimmune or endocrinal ) or malignancy .'

'-  Any coincidental chronic() cond("illness") ( e . g .  mod("metabolic") , mod("autoimmune") or mod("endocrinal") ) or cond("malignancy") .'

union(
    cond("illness")
        .chronic()
        .mod("metabolic")
        .mod("autoimmune")
        .mod("endocrinal"),
    cond("malignancy")
)

