'INC'

'-  be prescribed to take two or more medications per day , and manage their own medications .'

'-  be prescribed to take eq(val("two"), op(GTEQ)) drug() per eq(per(DAY)) , and manage their own drug() .'

intersect(
    drug()
        .min_count(
            eq(val("two"), op(GTEQ))
        )
        .duration(
            eq(per(DAY))
        ),
    drug()
)
