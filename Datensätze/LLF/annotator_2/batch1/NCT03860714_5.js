'EXC'

'-  The diagnosis Unstable hypertension ( Such as : pheochromocytoma or aortic dissection ) ③ Severe chronic obstructive pulmonary disease or congestive heart failure; ④ Severe liver and kidney dysfunction ;'

'-  The diagnosis change() cond("hypertension") ( Such as : cond("pheochromocytoma") or cond("aortic dissection") ) ③ severity(SEVERE) chronic() cond("obstructive pulmonary disease") or cond("congestive heart failure") ; ④ severity(SEVERE) mod("liver") and mod("kidney") cond("dysfunction") ;'

cond("hypertension")
    .change()
    .equiv(
        cond("pheochromocytoma"),
        cond("aortic dissection"),
        cond("obstructive pulmonary disease")
            .severity(SEVERE)
            .chronic(),
        cond("congestive heart failure"),
        cond("dysfunction")
            .severity(SEVERE)
            .mod("liver")
            .mod("kidney")
    )