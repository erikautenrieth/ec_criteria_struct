'EXC'

'-  Chronic kidney disease with a Glomerular Filtration Rate < 50 ml / min'

'-  chronic() cond("kidney disease") with a lab("Glomerular Filtration Rate") eq(op(LT), val("50"), unit("ml"), per(MINUTE))'

intersect(
    cond("kidney disease")
        .chronic(), 
    lab("Glomerular Filtration Rate")
        .num_filter(
            eq(op(LT), val("50"), unit("ml"), per(MINUTE))
        )
)