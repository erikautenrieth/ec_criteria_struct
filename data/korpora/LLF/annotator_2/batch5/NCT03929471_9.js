'EXC'

'-  Severe life - limiting Comorbidities ( malignant tumour , tuberculosis , . . . . )'

'-  severity(SEVERE) mod("life - limiting") cond() ( cond("malignant tumour") , cond("tuberculosis") , . . . . )'

cond()
    .severity(SEVERE)
    .mod("life - limiting")
    .equiv(
        cond("malignant tumour"),
        cond("tuberculosis")
    )