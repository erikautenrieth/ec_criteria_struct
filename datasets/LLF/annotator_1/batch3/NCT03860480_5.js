'INC'

'-  Chronic pain history with regular opioid and / or gabapentinoids use during the 2 weeks before surgery'

'-  chronic() obs("pain") eq(temporal_per(PAST)) with regular drug("opioid") and / or drug("gabapentinoids") use during the eq(val("2"), temporal_unit(WEEK), proc("surgery")) before proc("surgery")'

intersect(
    obs("pain")
        .chronic()
        .temporality(
            eq(temporal_per(PAST))
        ),
    seq(
       union(
            drug("opioid"),
            drug("gabapentinoids")
        ),
        before(
            proc("surgery"),
            eq(val("2"), temporal_unit(WEEK))
        )
    )
)
    