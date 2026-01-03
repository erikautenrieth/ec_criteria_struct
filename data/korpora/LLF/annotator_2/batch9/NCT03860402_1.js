'INC'

'-  Among the pregnant women who were administered cesarean section in this study , those who agreed to participate in this study .'

'-  Among the cond("pregnant") female() who were eq(temporal_per(PAST)) proc("cesarean section") in this study , those who agreed to participate in this study .'

intersect(
    cond("pregnant"),
    female(),
    proc("cesarean section")
        .temporality(
            eq(temporal_per(PAST))
        )
)
