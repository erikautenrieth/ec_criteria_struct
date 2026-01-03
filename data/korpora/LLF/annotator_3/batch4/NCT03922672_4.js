'INC'

'-  Have less than 5 years of music training'

'-  Have eq(op(LT), val("5"), temporal_unit(YEAR)) of social_habit("music training")'

social_habit("music training")
    .num_filter(
        eq(op(LT), val("5"), temporal_unit(YEAR))
    )