'INC'

'4.  Diagnosed with moderate to severe mitral stenosis who have a history of AF of any duration documented by any electrical tracing within the prior 12 months and for which anticoagulation is indicated and planned for the duration of the study .'

'4.  Diagnosed with eq(severity(MODERATE), op(BETWEEN), severity(SEVERE)) cond("mitral stenosis") who have a eq(temporal_per(PAST)) of cond("AF") of any duration documented by any proc("electrical tracing") within the eq(temporal_per(PAST), val("12"), temporal_unit(MONTH)) and for which proc("anticoagulation") is indicated() and eq(temporal_per(FUTURE)) the duration of the study .'

intersect(
    cond("mitral stenosis")
        .severity(
            eq(severity(MODERATE), op(BETWEEN), severity(SEVERE))
        ), 
    cond("AF")
        .temporality(
            eq(temporal_per(PAST))
        )
        .found_by(
            proc("electrical tracing")
                .temporality(
                    eq(temporal_per(PAST), val("12"), temporal_unit(MONTH))
                )
        ),
    indication(
        proc("anticoagulation")
            .temporality(
                eq(temporal_per(FUTURE))
            )
    )
)