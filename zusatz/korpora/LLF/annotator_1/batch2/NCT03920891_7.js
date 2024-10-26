'EXC'

'-  2.  Atrial fibrillation associated with severe cardiac malformation or a structural heart disease that is hemodynamically affected'

'-  2.  cond("Atrial fibrillation") associated with severity(SEVERE) cond("cardiac malformation") or a mod("structural") cond("heart disease") that is mod("hemodynamically") change()'

cond("Atrial fibrillation")
    .caused_by(
        cond("cardiac malformation")
            .severity(SEVERE),
        cond("heart disease")
            .mod("structural")
            .mod("hemodynamically")
            .change()
    )