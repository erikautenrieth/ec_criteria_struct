'EXC'

'Glaucoma or glaucoma suspicion'

'cond("Glaucoma") or cond("glaucoma") possible()'

union(
    cond("Glaucoma"),
    cond("glaucoma")
)
    .possible()