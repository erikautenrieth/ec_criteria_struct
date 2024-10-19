'INC'

'-  Patients aged 21 years or younger at the time of enrollment on this study of any gender , race or ethnicity .'

'-  Patients age() eq(val("21"), temporal_unit(YEAR), op(LTEQ)) at the time of enrollment on this study of any gender , race or ethnicity .'

age()
    .num_filter(
        eq(val("21"), temporal_unit(YEAR), op(LTEQ))
    )