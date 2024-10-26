'EXC'

'-  no medications that affect behavior / learning / appetite'

'-  neg() drug() that change() cond("behavior") / cond("learning") / cond("appetite")'

neg(
    union(
        cond("behavior"),
        cond("learning"),
        cond("appetite")
    )
        .change()
        .caused_by(
            drug()
        )
    
)
