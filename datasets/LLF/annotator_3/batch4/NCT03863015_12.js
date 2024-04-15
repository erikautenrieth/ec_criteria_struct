'EXC'

'5.  Pregnancy , or females in fertile age , unless a negative serum HCG can rule out pregnancy within the inclusion window .'

'5.  cond("Pregnancy") , or female() in cond("fertile age") , except() a pol(NEGATIVE) lab("serum HCG") can neg() cond("pregnancy") within the inclusion window .'

union(
    cond("Pregnancy"),
    intersect(
        female(),
        cond("fertile age")
    )
)
    .except(
        neg(
            cond("pregnancy")
        )
            .equiv(
                lab("serum HCG")
                    .pol(NEGATIVE)
            )
    )
