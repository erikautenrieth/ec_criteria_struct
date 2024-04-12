'EXC'

'-  Contraindications to CT imaging including impaired kidney / liver function , or lack of timely availability'

'-  contraindication() to proc("CT imaging") including cond("impaired") mod("kidney") / mod("liver function") , or lack of timely availability'

contraindication(
    proc("CT imaging")
)
.equiv(
    cond("impaired")
        .mod("kidney")
        .mod("liver function")
)