'INC'

'3.  Aged 21 - 45 ( advanced age can hinder hormone levels )'

'3.  age() eq(val("21"), op(BETWEEN), val("45")) ( advanced age can hinder hormone levels )'

age()
    .num_filter(
        eq(val("21"), op(BETWEEN), val("45"))
    )
