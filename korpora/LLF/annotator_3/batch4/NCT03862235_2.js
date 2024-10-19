'INC'

'-  Anabolic androgenic steroids users should be self - administering anabolic androgenic steroids in periodic cycles lasting from 8 to 12 weeks for at least 2 years with 2 - 4 cycles per year ;'

'-  drug("Anabolic androgenic steroids") users should be self - administering drug("anabolic androgenic steroids") in periodic cycles lasting from eq(val("8"), op(BETWEEN), val("12"), temporal_unit(WEEK)) for eq(op(GTEQ), val("2"), temporal_unit(YEAR)) with eq(val("2"), op(BETWEEN), val("4"), unit("cycles"), per(YEAR)) ;'

if_then(
    drug("Anabolic androgenic steroids"),
    drug("anabolic androgenic steroids")
        .duration(
            eq(val("8"), op(BETWEEN), val("12"), temporal_unit(WEEK))
        )
        .duration(
            eq(op(GTEQ), val("2"), temporal_unit(YEAR))
        )
        .temporality(
            eq(val("2"), op(BETWEEN), val("4"), unit("cycles"), per(YEAR))
        )
)
