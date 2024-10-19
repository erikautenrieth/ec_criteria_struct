'EXC'

'-  Substantial media opacity ( cataract , corneal scar , vitreous hemorrhage ) that may interfere with study imaging'

'-  severity(SEVERE) cond("media opacity") ( cond("cataract") , cond("corneal scar") , cond("vitreous hemorrhage") ) that may interfere with study imaging'

cond("media opacity")
    .severity(SEVERE)
    .equiv(
        cond("cataract"),
        cond("corneal scar"),
        cond("vitreous hemorrhage") 
    )