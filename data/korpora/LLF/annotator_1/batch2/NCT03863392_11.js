'EXC'

'-  A situation requiring LSCS ( Maternal or Fetal ) e . g : fetal distress'

'-  A cond() requiring LSCS ( mod("Maternal") or mod("Fetal") ) e . g : cond("fetal distress")'

cond()
    .equiv(
        cond("fetal distress")
            .mod("Maternal") 
            .mod("Fetal")
    )