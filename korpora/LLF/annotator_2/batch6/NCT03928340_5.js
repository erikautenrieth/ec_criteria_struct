'INC'

'-  All patients have done a dating ultrasound to confirm gestational age , viability and rule out any abnormality'

'-  All patients have eq(temporal_per(PAST)) a dating proc("ultrasound") to confirm obs("gestational age") , viability and rule out any abnormality'

obs("gestational age")
    .found_by(
        proc("ultrasound")
            .temporality(
                eq(temporal_per(PAST))
            )
    )