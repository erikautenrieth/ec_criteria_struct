'INC'

'-  Must have a clinical diagnosis of solid tumor cancer and be seeking treatment and supportive care at the UF Health Cancer Center ( Medical Plaza )'

'-  Must have a clinical diagnosis of cond("solid tumor cancer") and be eq(temporal_per(PRESENT)) proc() and proc("supportive care") at the loc(hosp("UF Health Cancer Center")) ( Medical Plaza )'

intersect(
    cond("solid tumor cancer"),
    union(
        proc(),
        proc("supportive care")
    )
        .temporality(
            eq(temporal_per(PRESENT))
        )
        .loc(hosp("UF Health Cancer Center"))
)
