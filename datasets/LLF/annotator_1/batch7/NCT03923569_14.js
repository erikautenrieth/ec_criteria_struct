'EXC'

'-  contraindication for MRI ( metallic body parts , claustrophobia ) ,'

'-  contraindication() for proc("MRI") ( cond("metallic body parts") , cond("claustrophobia") ) ,'

contraindication(
    proc("MRI")
)
.equiv(
    cond("metallic body parts"),
    cond("claustrophobia")
)