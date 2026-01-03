'EXC'

'-  pregnant women with any systemic condition ( such as chronic hypertension , diabetes mellitus , thyroid diseases , liver and kidney diseases )'

'-  cond("pregnant") female() with any mod("systemic") cond("condition") ( such as cond("chronic hypertension") , cond("diabetes mellitus") , cond("thyroid diseases") , mod("liver") and mod("kidney") cond("diseases") )'

intersect(
    cond("pregnant"),
    female(),
    cond("condition")
        .mod("systemic")
        .equiv(
            cond("chronic hypertension"),
            cond("diabetes mellitus"),
            cond("thyroid diseases")
                .mod("liver"),
            cond("diseases")
                .mod("kidney")
        )
)