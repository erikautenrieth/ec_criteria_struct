'EXC'

'-  History of Irritable Bowel Syndrome , food intolerances or any gastrointestinal disorders'

'-  eq(temporal_per(PAST)) of cond("Irritable Bowel Syndrome") , cond("food intolerances") or any cond("gastrointestinal disorders")'

union(
    cond("Irritable Bowel Syndrome"),
    cond("food intolerances"),
    cond("gastrointestinal disorders")
)
    .temporality(
        eq(temporal_per(PAST))
    )