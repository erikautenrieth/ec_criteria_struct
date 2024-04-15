'INC'

'-  Serum HDL - C : < 50 / 40 mg / dl ; F / M'

'-  lab("Serum HDL - C") : eq(op(LT), val("50"), val("40"), unit("mg"), unit("dl")) ; female() / male()'

intersect(
    lab("Serum HDL - C")
        .num_filter(
            eq(op(LT), val("50"), val("40"), unit("mg"), unit("dl"))
        ),
    union(
        female(),
        male()
    )
)
