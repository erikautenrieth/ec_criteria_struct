'EXC'

'2.  Contraindication to a maximum single dose of 310 µg Dexamethasone Sodium Phosphate ( DSP )'

'2.  contraindication() to a eq(op(LTEQ), val("310"), unit("µg")) drug("Dexamethasone Sodium Phosphate") ( drug("DSP") )'

contraindication(
    drug("Dexamethasone Sodium Phosphate")
        .num_filter(
            eq(op(LTEQ), val("310"), unit("µg"))
        )
        .equiv(
            drug("DSP")
        )
)