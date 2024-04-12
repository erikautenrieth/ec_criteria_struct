'EXC'

'-  Contraindications to IUD insertion ( active pelvic infection , current pregnancy )'

'-  contraindication() to proc("IUD insertion") ( eq(temporal_per(PRESENT)) cond("pelvic infection") , eq(temporal_per(PRESENT)) cond("pregnancy") )'

contraindication(
    proc("IUD insertion")
)
.equiv(
    cond("pelvic infection")
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    cond("pregnancy")
        .temporality(
            eq(temporal_per(PRESENT))
        )
)