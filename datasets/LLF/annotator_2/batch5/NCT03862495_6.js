'EXC'

'2.  comorbidities that are known to be related to adverse pregnancy outcomes ( e . g . , diabetes and hypertension ) ;'

'2.  cond("comorbidities") that are known to be related to cond("adverse pregnancy outcomes") ( e . g . , cond("diabetes") and cond("hypertension") ) ;'

cond("comorbidities")
    .caused_by(
        cond("adverse pregnancy outcomes")
    )
    .equiv(
        cond("diabetes"),
        cond("hypertension")
    )