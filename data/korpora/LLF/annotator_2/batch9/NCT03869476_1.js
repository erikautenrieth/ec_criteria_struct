'INC'

'-  Adult ( 18 years of age or older ) with the diagnosis of essential thrombocytosis , prefibrotic myelofibrosis or overt myelofibrosis according to WHO 2016 criteria ;'

'-  adult() ( eq(val("18"), temporal_unit(YEAR), op(GTEQ)) ) with the diagnosis of cond("essential thrombocytosis") , cond("prefibrotic myelofibrosis") or cond("overt myelofibrosis") according to WHO 2016 criteria ;'

intersect(
    adult()
        .equiv(
            age()
                .num_filter(
                    eq(val("18"), temporal_unit(YEAR), op(GTEQ))
                )
        ),
    union(
        cond("essential thrombocytosis"),
        cond("prefibrotic myelofibrosis"),
        cond("overt myelofibrosis")
    )
)