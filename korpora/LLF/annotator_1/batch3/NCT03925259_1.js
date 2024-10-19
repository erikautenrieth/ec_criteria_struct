'INC'

'-  Long term physical health condition and comorbid mental health problem'

'-  chronic() cond("physical health condition") and cond("comorbid mental health problem")'

union(
    cond("physical health condition"),
    cond("comorbid mental health problem")
)
.chronic()