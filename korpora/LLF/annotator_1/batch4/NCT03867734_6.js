'EXC'

'-  History of renal disease ( including diagnosis of solitary kidney , chronic renal insufficiency , renal cell carcinoma etc . )'

'-  eq(temporal_per(PAST)) of cond("renal disease") ( including diagnosis of cond("solitary kidney") , chronic() cond("renal insufficiency") , cond("renal cell carcinoma") etc . )'

cond("renal disease")
    .temporality(
        eq(temporal_per(PAST))
    )
    .equiv(
        cond("solitary kidney"),
        cond("renal insufficiency")
            .chronic(),
        cond("renal cell carcinoma")
    )