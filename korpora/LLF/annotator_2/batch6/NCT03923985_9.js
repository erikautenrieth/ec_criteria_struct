'EXC'

'-  Women with intolerance , allergy or hypersensitivity to the components of the probiotic'

'-  female() with cond("intolerance") , allergy() or cond("hypersensitivity") to the components of the drug("probiotic")'

intersect(
    female(),
    union(
        cond("intolerance"),
        allergy(),
        cond("hypersensitivity")
    )
        .caused_by(
            drug("probiotic")
        )
)