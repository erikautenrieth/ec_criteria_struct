'EXC'

'3.  Hyponatremia ( serum sodium ≤ 128 mEq / L )'

'3.  cond("Hyponatremia") ( lab("serum sodium") eq(op(LTEQ), val("128"), unit("mEq"), unit("L")) )'

cond("Hyponatremia")
    .equiv(
        lab("serum sodium")
            .num_filter(
            eq(op(LTEQ), val("128"), unit("mEq"), unit("L"))
        )
    )