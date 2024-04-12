'INC'

'-  Were discharged into the community within 4 months of transfer out of the ICU ( excluding patients who were in hospital long - term )'

'-  Were enc(DISCHARGE) into the community eq(op(LTEQ), val("4"), temporal_unit(MONTH)) of enc(TRANSFER) out of the loc(unit("ICU")) ( except() patients who were in enc(INPATIENT) eq(val("long - term")) )'

seq(
    enc(DISCHARGE),
    after(
        enc(TRANSFER)
            .loc(unit("ICU"))
            .duration(
                eq(op(LTEQ), val("4"), temporal_unit(MONTH))
            )
            .except(
                enc(INPATIENT)
                    .duration(
                        eq(val("long - term"))
                    )
            )
    )
)