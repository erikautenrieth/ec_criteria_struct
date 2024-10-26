'EXC'

'1.  Any active or untreated thymoma .  History of thymic carcinoma or thymic malignancy unless deemed cured by adequate treatment with no evidence of recurrence for ≥ 5 years before screening .'

'1.  Any eq(temporal_per(PRESENT)) or untreated cond("thymoma") .  eq(temporal_per(PAST)) of cond("thymic carcinoma") or cond("thymic malignancy") except() deemed cured by adequate proc() with neg() evidence of cond("recurrence") for eq(op(GTEQ), val("5"), temporal_unit(YEAR)) before screening .'

union(
    cond("thymoma") 
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    union(
        cond("thymic carcinoma"),
        cond("thymic malignancy")
    )
        .except(
            neg(
                cond("recurrence")
                    .temporality(
                        eq(op(GTEQ), val("5"), temporal_unit(YEAR))
                    )
            )
        )
)