'INC'

'-  Waist C > 89 / 102 cm ; F / M'

'-  measurement("Waist C") eq(op(GT), val("89"), val("102"), unit("cm")) ; female() / male()'

intersect(
    measurement("Waist C")
        .num_filter(
            eq(op(GT), val("89"), val("102"), unit("cm"))
        ),
    union(
        female(),
        male()
    )
)