'EXC'

'2.  Has contraindications for drinking oral glucose solution up to 100 g of sugar'

'2.  Has contraindication() for mod("drinking oral") drug("glucose") solution eq(op(LTEQ), val("100"), unit("g"), unit("sugar"))'

contraindication(
    drug("glucose")
        .mod("drinking oral")
        .num_filter(
            eq(op(LTEQ), val("100"), unit("g"), unit("sugar"))
        )
)