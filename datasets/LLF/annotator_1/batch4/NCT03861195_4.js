'INC'

'-  indication for radical hysterectomy and / or pelvic - / para - aortic ( sentinel - node ) lymphadenectomy for cervical cancer'

'-  indication() for proc("radical hysterectomy") and / or mod("pelvic") - / mod("para - aortic") ( mod("sentinel - node") ) proc("lymphadenectomy") for cond("cervical cancer")'

indication(
    proc("radical hysterectomy"),
    proc("lymphadenectomy")
        .mod("pelvic")
        .mod("para - aortic")
        .mod("sentinel - node")
        .for(
            cond("cervical cancer")
        )
)