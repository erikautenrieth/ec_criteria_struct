'INC'

'-  patients recipients in France from 2008 to 2015 of a first kidney transplant / heart / lung / liver donor living or deceased , non - immunized anti - HLA before the transplant'

'-  patients recipients in loc(res("France")) from eq(val("2008"), op(BETWEEN), val("2015")) of a eq(temporal_rec(FIRST_TIME)) mod("kidney") proc("transplant") / mod("heart") / mod("lung") / mod("liver donor") obs("living") or death() , neg() - immune() cond("anti - HLA") before the proc("transplant")'

proc("transplant")
    .loc(res("France"))
    .num_filter(
        eq(temporal_rec(FIRST_TIME)),
        eq(val("2008"), op(BETWEEN), val("2015"))
    )
    .mod("kidney")
    .mod("heart")
    .mod("lung")
    .mod("liver donor")

neg(
    proc("transplant"),
    immune(),
    cond("anti - HLA")
)
