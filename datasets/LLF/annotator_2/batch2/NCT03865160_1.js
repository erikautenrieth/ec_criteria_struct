'INC'

'-  Children aged 6 - 11 years with - 1 - to - 10 diopters ( D ) myopia'

'-  child() age() eq(val("6"), op(BETWEEN), val("11"), temporal_unit(YEAR)) with eq(val("- 1"), op(BETWEEN), val("- 10"), unit("diopters"), unit("D")) measurement("myopia")'

intersect(
    child(),
    age()
        .num_filter(
            eq(val("6"), op(BETWEEN), val("11"), temporal_unit(YEAR))
        ),
    measurement("myopia")
        .num_filter(
            eq(val("- 1"), op(BETWEEN), val("- 10"), unit("diopters"), unit("D"))
        )
)