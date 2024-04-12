'EXC'

'4.  Immunosuppression , defined as history of solid organ transplant or as receipt of ablative chemotherapy , steroids at the equivalent of ≥ 5 mg / day prednisone , antimetabolites , anti - TNFα agents , calcineurin inhibitors , or mycophenolate'

'4.  cond("Immunosuppression") , defined as eq(temporal_per(PAST)) of proc("solid organ transplant") or as eq(temporal_per(PAST)) of proc("ablative chemotherapy") , drug("steroids") at the equivalent of eq(op(GTEQ), val("5"), unit("mg"), per(DAY)) drug("prednisone") , drug("antimetabolites") , drug("anti - TNFα agents") , drug("calcineurin inhibitors") , or drug("mycophenolate")'

cond("Immunosuppression")
    .equiv(
        union(
            proc("solid organ transplant")
                .temporality(
                    eq(temporal_per(PAST))
                ),
            proc("ablative chemotherapy")
                .temporality(
                    eq(temporal_per(PAST))
                )
        ),
        drug("steroids")
            .equiv(
                drug("prednisone")
                    .num_filter(
                        eq(op(GTEQ), val("5"), unit("mg"), per(DAY))
                    )
            ),
        union(
            drug("antimetabolites"),
            drug("anti - TNFα agents"),
            drug("calcineurin inhibitors"),
            drug("mycophenolate")
        )
    )


