'INC'

'-  Chronic ( more than three months ) ESBL colonization of the same strain as determined by'

'-  chronic() ( eq(op(GT), val("three"), temporal_unit(MONTH)) ) cond("ESBL colonization") of the same strain as determined by'

cond("ESBL colonization")
    .chronic()
    .duration(
        eq(op(GT), val("three"), temporal_unit(MONTH))
    )