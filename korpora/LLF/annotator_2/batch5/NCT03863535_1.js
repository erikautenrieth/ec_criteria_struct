'INC'

'Type II diabetic patients , 18 years and older , were included if the participants had :'

'mod("Type II") cond("diabetic") patients , eq(val("18"), temporal_unit(YEAR), op(GTEQ)) , were included if the participants had :'

intersect(
    cond("diabetic")
        .mod("Type II"),
    age()
        .num_filter(
            eq(val("18"), temporal_unit(YEAR), op(GTEQ))
        )
)
    