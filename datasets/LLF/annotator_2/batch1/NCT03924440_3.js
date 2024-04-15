'INC'

'3.  Aged 18 - 34 ( advanced age can hinder PdG levels )'

'3.  age() eq(val("18"), op(BETWEEN), val("34")) ( advanced age can hinder PdG levels )'

age()
    .num_filter(
        eq(val("18"), op(BETWEEN), val("34"))
    )