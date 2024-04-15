'EXC'

'5.  Active substance use disorder within past 6 months'

'5.  eq(temporal_per(PRESENT)) cond("substance use disorder") eq(op(LTEQ), temporal_per(PAST), val("6"), temporal_unit(MONTH))'

cond("substance use disorder")
    .temporality(
        and(
            eq(temporal_per(PRESENT)),
            eq(op(LTEQ), temporal_per(PAST), val("6"), temporal_unit(MONTH))
        )
    )