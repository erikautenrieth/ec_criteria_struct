'EXC'

'-  1. Age ≥ 80 years 2. Brain metastasis 3. With other malignancies 4. Chronic diarrhea , cardiac disease , pregnancy or breast feeding'

'-  1. age() eq(op(GTEQ), val("80"), temporal_unit(YEAR)) 2. mod("Brain") cond("metastasis") 3. With other cond("malignancies") 4. chronic() cond("diarrhea") , cond("cardiac disease") , cond("pregnancy") or cond("breast feeding")'

intersect(
    age()
        .num_filter(
            eq(op(GTEQ), val("80"), temporal_unit(YEAR))
        ),
    cond("metastasis")
        .mod("Brain"),
    cond("malignancies"),
    union(
        cond("diarrhea")
            .chronic(),
        cond("cardiac disease"),
        cond("pregnancy"),
        cond("breast feeding")
    )
)