'INC'

'-  "Afflicted" participants : must meet criteria for at least one of the following subjective afflictions based on Q 1 responses : 1 ) Cardiovascular Dysfunction , 2 ) Neurocognitive Disease , 3 ) Chronic Pain , and / or 4 ) Sleep Apnea'

'-  "Afflicted" participants : must meet criteria for eq(op(GTEQ), val("one")) of criteria() subjective afflictions based on Q 1 responses : 1 ) cond("Cardiovascular Dysfunction") , 2 ) cond("Neurocognitive Disease") , 3 ) chronic() obs("Pain") , and / or 4 ) cond("Sleep Apnea")'

criteria(
    cond("Cardiovascular Dysfunction"),
    cond("Neurocognitive Disease"),
    obs("Pain")
        .chronic(),
    cond("Sleep Apnea")
)
    .min_count(
        eq(op(GTEQ), val("one"))
    )
