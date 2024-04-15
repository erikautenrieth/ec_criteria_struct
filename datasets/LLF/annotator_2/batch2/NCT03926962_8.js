'EXC'

'-  Regular / routine treatment with non - topical medications within 30 days prior to entry into the clinical research center'

'-  Regular / eq(temporal_per(PRESENT)) proc() with neg() - drug("topical medications") eq(op(LTEQ), val("30"), temporal_unit(DAY)) prior to entry into the clinical research center'

intersect(
    proc()
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    neg(
        drug("topical medications")
            .temporality(
                eq(op(LTEQ), val("30"), temporal_unit(DAY))
            )
    )
)