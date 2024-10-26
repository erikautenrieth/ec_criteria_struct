'INC'

'-  Their medical record shows that they are HIV positive or otherwise immunocompromised ;'

'-  Their medical record shows that they are cond("HIV") pol(POSITIVE) or otherwise cond("immunocompromised") ;'

union(
    cond("HIV")
        .pol(POSITIVE),
    cond("immunocompromised")
)