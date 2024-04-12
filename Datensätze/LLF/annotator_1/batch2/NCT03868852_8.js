'INC'

'1.  Blood routine examination standards should be met : ( no blood transfusion within 14 days ) A .  HB > 90 g / L; B .  ANC > 1.5 * 109 / L; C .  PLT > 80 * 109 / L'

'1.  Blood routine examination standards should be met : ( neg() proc("blood transfusion") eq(op(LTEQ), val("14"), temporal_unit(DAY)) ) A .  lab("HB") eq(op(GT), val("90"), unit("g"), unit("L")) ; B .  lab("ANC") eq(op(GT), val("1.5"), val("109"), unit("L")) ; C .  lab("PLT") eq(op(GT), val("80"), val("109"), unit("L"))'

intersect(
    neg(
        proc("blood transfusion")
            .temporality(
                eq(op(LTEQ), val("14"), temporal_unit(DAY))
            )
    ),
    lab("HB")
        .num_filter(
            eq(op(GT), val("90"), unit("g"), unit("L"))
        ), 
    lab("ANC")
        .num_filter(
            eq(op(GT), val("1.5"), val("109"), unit("L"))
        ), 
    lab("PLT")
        .num_filter(
            eq(op(GT), val("80"), val("109"), unit("L"))
        )
)