'INC'

'1.  Healthy children with absence of severe chronic disease'

'1.  cond("Healthy") child() with neg() severity(SEVERE) chronic() cond()'

intersect(
    cond("Healthy"),
    child(),
    neg(
        cond()
            .severity(SEVERE)
            .chronic()
    )
)