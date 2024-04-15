'EXC'

'-  Patients with known systemic diseases such as diabetes and cardiovascular diseases or using medications that affect periodontal tissues , pregnant or lactating women'

'-  Patients with known mod("systemic") cond() such as cond("diabetes") and cond("cardiovascular diseases") or eq(temporal_per(PRESENT)) drug() that affect cond("periodontal tissues") , cond("pregnant") or cond("lactating") female()'

union(
    cond()
        .mod("systemic")
        .equiv(
            cond("diabetes"),
            cond("cardiovascular diseases"),
            drug()
                .change(
                    cond("periodontal tissues")
                )
            ),
    intersect(
        female(),
        union(
            cond("pregnant"),
            cond("lactating")
        )
    )
)
