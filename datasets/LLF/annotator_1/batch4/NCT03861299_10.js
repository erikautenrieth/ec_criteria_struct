'EXC'

'3.  Substantial non - contrast enhancing tumor areas suggesting low grade gliomas with malignant transformation'

'3.  severity(SEVERE) mod("non - contrast enhancing") cond("tumor") areas possible() pol(LOW) cond("gliomas") with mod("malignant transformation")'

intersect(
    cond("tumor")
        .severity(SEVERE)
        .mod("non - contrast enhancing"),
    cond("gliomas")
        .possible()
        .pol(LOW)
        .mod("malignant transformation")
)