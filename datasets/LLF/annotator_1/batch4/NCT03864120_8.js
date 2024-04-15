'EXC'

'4.  Evidence of extra peritoneal leakage , eg .  leakage to thoracic cavity , post peritoneal , hernia .'

'4.  Evidence of mod("extra") cond("peritoneal leakage") , eg .  cond("leakage") to mod("thoracic cavity") , post proc("peritoneal") , cond("hernia") .'

cond("peritoneal leakage")
    .equiv(
        cond("leakage")
            .mod("thoracic cavity"), 
        proc("peritoneal"), 
        cond("hernia")
    )