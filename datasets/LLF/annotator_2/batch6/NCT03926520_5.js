'INC'

'5.  Medically stable for safe administration of ECT verified by standard physical examination , urinalysis and serum chemistries'

'5.  cond() stable() for safe administration of ECT verified by proc("standard physical examination") , lab("urinalysis") and lab("serum chemistries")'

cond()
    .stable()
    .found_by(
        intersect(
            proc("standard physical examination"),
            lab("urinalysis"),
            lab("serum chemistries")
        )
    )