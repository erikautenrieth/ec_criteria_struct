'EXC'

'-  Patients with concurrent or previous malignant tumors within 5 years before the study enrollment'

'-  Patients with mod("concurrent") or eq(temporal_per(PAST)) cond("malignant tumors") eq(op(LTEQ), val("5"), temporal_unit(YEAR)) before the study enrollment'

union(
    cond("malignant tumors")
        .mod("concurrent")
        .temporality(
            and(
                eq(temporal_per(PAST)),
                eq(op(LTEQ), val("5"), temporal_unit(YEAR))
            )
        )
)