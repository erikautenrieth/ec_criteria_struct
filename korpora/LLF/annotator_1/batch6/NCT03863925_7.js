'EXC'

'-  Patients with contraindications to ECT , including myocardial infarction , cerebrovascular disease , elevated intracranial pressure , intracranial angiomas , untreated bony fractures , cervical spine injury , pheochromocytoma , heart failure , sever valvular disease , deep vein thrombosis , etc .'

'-  Patients with contraindication() to proc("ECT") , including cond("myocardial infarction") , cond("cerebrovascular disease") , cond("elevated intracranial pressure") , cond("intracranial angiomas") , untreated cond("bony fractures") , obs("cervical spine injury") , cond("pheochromocytoma") , cond("heart failure") , severity(SEVERE) cond("valvular disease") , cond("deep vein thrombosis") , etc .'

contraindication(
    proc("ECT")
)
.equiv(
    cond("myocardial infarction"),
    cond("cerebrovascular disease"),
    cond("elevated intracranial pressure"),
    cond("intracranial angiomas"),
    cond("bony fractures"),
    obs("cervical spine injury"),
    cond("pheochromocytoma"),
    cond("heart failure"),
    cond("valvular disease")
        .severity(SEVERE),
    cond("deep vein thrombosis")
)