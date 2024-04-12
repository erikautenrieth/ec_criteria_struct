'EXC'

'-  Having a seating modification applied at least 1 year before being included in the study'

'-  Having a cond("seating modification") applied eq(op(GTEQ), val("1"), temporal_unit(YEAR)) before being included in the study'

cond("seating modification")
    .temporality(
        eq(op(GTEQ), val("1"), temporal_unit(YEAR))
    )