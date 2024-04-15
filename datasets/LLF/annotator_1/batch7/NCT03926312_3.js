'INC'

'3.  Patients ≥ 1 and ≤ 6 months after type I myocardial infarction'

'3.  Patients eq(op(GTEQ), val("1")) and eq(op(LTEQ), val("6"), temporal_unit(MONTH)) after eq(unit("type"), val("I")) cond("myocardial infarction")'

cond("myocardial infarction")
    .num_filter(
        eq(unit("type"), val("I"))
    )
    .duration(
        and(
            eq(op(GTEQ), val("1"), temporal_unit(MONTH)),
            eq(op(LTEQ), val("6"), temporal_unit(MONTH))
        )
    )