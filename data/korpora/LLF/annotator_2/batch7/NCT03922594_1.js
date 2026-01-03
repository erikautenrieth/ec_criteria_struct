'INC'

'-  All infants or fetuses with microcephaly , ( defined as head circumference ≤ - 3 SD according to INTERGROWTH standards for gestational age and sex , detected during the mother\'s pregnancy , or at the end of the mother\'s pregnancy at one of the participating maternities )'

'-  All infant() or infant() with cond("microcephaly") , ( defined as measurement("head circumference") eq(op(LTEQ), val("3"), unit("SD")) according to INTERGROWTH standards for gestational age and sex , detected during the mother cond("pregnancy") , or at the end of the mother cond("pregnancy") at one of the participating maternities )'

seq(
    union(
        infant(),
        intersect(
            infant(),
            cond("microcephaly")
                .equiv(
                    measurement("head circumference")
                        .num_filter(
                            eq(op(LTEQ), val("3"), unit("SD"))
                        )
                )
        )
    ),
    during(
        union(
            cond("pregnancy"),
            cond("pregnancy")
        )
    )
)