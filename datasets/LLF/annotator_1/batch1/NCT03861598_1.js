'INC'

'-  Grade IV Glioblastoma , receiving chemotherapy with or without TTfields .'

'-  eq(unit("Grade"), val("IV")) cond("Glioblastoma") , eq(temporal_per(PRESENT)) proc("chemotherapy") with or neg() proc("TTfields") .'

intersect(
    cond("Glioblastoma")
        .num_filter(
            eq(unit("Grade"), val("IV"))
        )
    ),
    union(
        proc("chemotherapy")
            .temporality(
                eq(temporal_per(PRESENT))
            ),
        neg(
            proc("TTfields")
        )
    )