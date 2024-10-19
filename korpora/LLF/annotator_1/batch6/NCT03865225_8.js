'EXC'

'-  malignant cerebral infarct or indication for treatment at intensive care unit'

'-  cond("malignant cerebral infarct") or contraindication() for proc() at loc(unit("intensive care unit"))'

union(
    cond("malignant cerebral infarct"), 
    contraindication(
        proc()
            .loc(unit("intensive care unit"))
    )
)