'EXC'

'-  Significant arrhythmia ( i . e .  ventricular tachycardia and fibrillation , atrial fibrillation , atrial flutter )'

'-  severity(SEVERE) cond("arrhythmia") ( i . e .  cond("ventricular tachycardia") and cond("fibrillation") , cond("atrial fibrillation") , cond("atrial flutter") )'

cond("arrhythmia")
    .severity(SEVERE)
    .equiv(
        cond("ventricular tachycardia"),
        cond("fibrillation"),
        cond("atrial fibrillation"),
        cond("atrial flutter")
    )