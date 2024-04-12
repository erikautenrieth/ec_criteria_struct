'EXC'

'-  History of opioid , other illicit substance , or alcohol use disorder either before or during pregnancy'

'-  eq(temporal_per(PAST)) of mod("opioid") , other mod("illicit") cond("substance") , or cond("alcohol use disorder") either before or during cond("pregnancy")'

seq(
    union(
        cond("substance")
            .temporality(
                eq(temporal_per(PAST))
            )
            .mod("opioid")
            .mod("illicit"),
        cond("alcohol use disorder")
    ),
    before(
        cond("pregnancy")
    )
)