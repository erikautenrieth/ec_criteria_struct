'EXC'

'-  having medical conditions and / or taking medications known to affect glycaemia ( glucocorticoids , thyroid hormones , thiazide diuretics )'

'-  having cond() and / or eq(temporal_per(PRESENT)) drug() known to change() cond("glycaemia") ( drug("glucocorticoids") , drug("thyroid hormones") , drug("thiazide diuretics") )'

cond("glycaemia")
    .change()
    .caused_by(
        union(
            cond(),
            drug()
                .temporality(
                    eq(temporal_per(PRESENT))
                )
                .equiv(
                    drug("glucocorticoids"),
                    drug("thyroid hormones"),
                    drug("thiazide diuretics")
                )
        )
    )