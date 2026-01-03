'EXC'

'-  Small bowel malignancy or history of small bowel malignancy'

'-  cond("Small bowel malignancy") or eq(temporal_per(PAST)) of cond("small bowel malignancy")'

union(
    cond("Small bowel malignancy"),
    cond("small bowel malignancy")
        .temporality(
            eq(temporal_per(PAST))
        )
)