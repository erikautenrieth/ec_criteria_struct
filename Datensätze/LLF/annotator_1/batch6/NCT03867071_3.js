'INC'

'-  patient presenting at least one of the following fractures : Basin and / or femur with surgical indication , associated or not with other fractures .'

'-  patient presenting eq(op(GTEQ), val("one")) , criteria() cond("fractures") : mod("Basin") and / or mod("femur") with proc("surgical") indication() , associated or not with other cond("fractures") .'

criteria(
    intersect(
        cond("fractures")
            .mod("Basin")
            .mod("femur"),
        indication(
            proc("surgical")
        )
    ),
    cond("fractures")
)
.num_filter(
    eq(op(GTEQ), val("one"))
)