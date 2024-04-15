'INC'

'4.  Prothrombin time activity < 40 % or prothrombin time international ratio > 1.5 ;'

'4.  lab("Prothrombin time activity") eq(op(LT), val("40")) or lab("prothrombin time international ratio") eq(op(GT), val("1.5")) ;'

union(
    lab("Prothrombin time activity")    
        .num_filter(
            eq(op(LT), val("40"))
        ),
    lab("prothrombin time international ratio")
        .num_filter(
            eq(op(GT), val("1.5"))
        )
)