'INC'

'1.  Raised inflammatory markers ( CRP / SAA ) ( mandatory criteria )'

'1.  cond("Raised inflammatory markers") ( cond("CRP") / cond("SAA") ) ( mandatory criteria )'

cond("Raised inflammatory markers")
    .equiv(
        cond("CRP"),
        cond("SAA")
    )