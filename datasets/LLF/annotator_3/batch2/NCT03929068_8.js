'EXC'

'-  History of malignant melanoma or suspicious skin lesions'

'-  eq(temporal_per(PAST)) of cond("malignant melanoma") or suspicious cond("skin lesions")'

union(
    cond("malignant melanoma")
        .temporality(
            eq(temporal_per(PAST))
        ),
    cond("skin lesions")
)
