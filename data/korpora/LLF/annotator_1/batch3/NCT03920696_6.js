'EXC'

'-  Clinical lesions incompatible with Pityriasis Lichenoides according to classically published semiological data'

'-  cond("Clinical lesions") neg() with cond("Pityriasis Lichenoides") according to classically published semiological data'

intersect(
    cond("Clinical lesions"),
    neg(
        cond("Pityriasis Lichenoides")
    )
)