'EXC'

'-  the carer has a significant health problem or disability , which precludes him / her from participating in the study ;'

'-  the carer has a severity(SEVERE) cond() or cond("disability") , which precludes him / her from participating in the study ;'

union(
    cond()
        .severity(SEVERE),
    cond("disability")
)