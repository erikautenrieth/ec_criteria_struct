'INC'

'4.  Physical inactivity before MI defined as the absence of moderate to vigorous exercise for at least 30 minutes 5 or more days a week'

'4.  cond("Physical inactivity") before cond("MI") defined as the neg() of severity(MODERATE) to severity(SEVERE) social_habit("exercise") for eq(op(GTEQ), val("30"), temporal_unit(MINUTE)) eq(val("5"), op(GTEQ), temporal_unit(DAY), per(WEEK))'

seq(
    cond("Physical inactivity"),
    before(
        cond("MI")
    )
)
    .equiv(
        neg(
            social_habit("exercise")
                .severity(MODERATE)
                .severity(SEVERE)
                .duration(
                    and(
                        eq(op(GTEQ), val("30"), temporal_unit(MINUTE)),
                        eq(val("5"), op(GTEQ), temporal_unit(DAY), per(WEEK))
                    )
                )
        )
    )