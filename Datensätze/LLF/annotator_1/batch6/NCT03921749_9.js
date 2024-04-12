'EXC'

'-  any contraindication to extracorporeal shock wave ( pregnancy , cancer , coagulation disorders , inflammatory disease , pacemakers , or other electronic implants ) .'

'-  any contraindication() to proc("extracorporeal shock wave") ( cond("pregnancy") , cond("cancer") , cond("coagulation disorders") , cond("inflammatory disease") , proc("pacemakers") , or other proc("electronic implants") ) .'

contraindication(
    proc("extracorporeal shock wave")
)
.equiv(
    cond("pregnancy"),
    cond("cancer"),
    cond("coagulation disorders"),
    cond("inflammatory disease"),
    proc("pacemakers"),
    proc("electronic implants")
)