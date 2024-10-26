'INC'

'-  Mild COPD with performed pulmonary function test'

'-  severity(MILD) cond("COPD") with performed lab("pulmonary function test")'

intersect(
    cond("COPD")
        .severity(MILD),
    lab("pulmonary function test")
)
