'EXC'

'10.  Severe aphasia or dysphasia'

'10.  severity(SEVERE) cond("aphasia") or cond("dysphasia")'

union(
    cond("aphasia"),
    cond("dysphasia")
)
.severity(SEVERE)