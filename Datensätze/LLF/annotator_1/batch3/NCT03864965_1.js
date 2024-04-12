'INC'

'-  Patients having mild cognitive impairment ( MCI ) or very mild to mild dementia ( CDR 0.5 - 1 ) .'

'-  Patients having severity(MILD) cond("cognitive impairment") ( cond("MCI") ) or eq(severity(MILD), op(BETWEEN), severity(MILD)) very mild to mild cond("dementia") ( obs("CDR") eq(val("0.5"), op(BETWEEN), val("1")) ) .'

union(
    cond("cognitive impairment")
        .severity(MILD)
        .equiv(
            cond("MCI")
        ),
    cond("dementia")
        .severity(
            eq(severity(MILD), op(BETWEEN), severity(MILD))
        )
        .equiv(
            obs("CDR")
                .num_filter(
                    eq(val("0.5"), op(BETWEEN), val("1"))
                )
        )
)