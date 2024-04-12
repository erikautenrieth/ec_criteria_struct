'INC'

'-  indication for modified radical hysterectomy and / or pelvic - / para - aortic ( sentinel - node ) lymphadenectomy for endometrial cancer'

'-  indication() for mod("modified radical") proc("hysterectomy") and / or mod("pelvic") - / mod("para - aortic") ( mod("sentinel - node") ) proc("lymphadenectomy") for cond("endometrial cancer")'

indication(
    proc("hysterectomy")
        .mod("modified radical"),
    proc("lymphadenectomy")
        .mod("pelvic")
        .mod("para - aortic")
        .mod("sentinel - node")
        .for(
            cond("endometrial cancer")
        )
)