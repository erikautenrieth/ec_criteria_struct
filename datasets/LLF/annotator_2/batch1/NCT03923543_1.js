'INC'

'-  newborn to be operated with the diagnosis of congenital heart disease'

'-  infant() eq(temporal_per(FUTURE)) proc("operated") with the diagnosis of cond("congenital heart disease")'

intersect(
    infant(),
    proc("operated")
        .temporality(
            eq(temporal_per(FUTURE))
        ),
    cond("congenital heart disease"),
)