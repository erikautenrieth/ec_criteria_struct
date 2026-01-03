'INC'

'-  All adult patients ( aged ≥ 18 years ) undergoing elective bariatric surgery and by any approach ( Includes surgery with laparoscopic , assisted laparoscopic approach or open approach ) in a participating hospital during the 30 - day cohort period with a planned overnight stay .'

'-  All adult() patients ( age() eq(op(GTEQ), val("18"), temporal_unit(YEAR)) ) eq(temporal_per(PRESENT)) mod("elective") proc("bariatric surgery") and by any approach ( Includes proc("surgery") with mod("laparoscopic") , mod("assisted") proc("laparoscopic approach") or proc("open approach") ) in a participating loc(hosp("hospital")) during the eq(val("30"), temporal_unit(DAY)) cohort period with a eq(temporal_per(FUTURE)) enc(INPATIENT) .'

seq(
    intersect(
        adult()
            .equiv(
                age()
                    .num_filter(
                        eq(op(GTEQ), val("18"), temporal_unit(YEAR))
                    )
            ),
        proc("bariatric surgery")
            .temporality(
                eq(temporal_per(PRESENT))
            )
            .mod("elective")
            .equiv(
                proc("surgery")
                    .mod("laparoscopic"),
                proc("laparoscopic approach")
                    .mod("assisted"),
                proc("open approach")
            )
    )
        .loc(hosp("hospital")),
    during(
        enc(INPATIENT)
            .temporality(
                and(
                    eq(val("30"), temporal_unit(DAY)),
                    eq(temporal_per(FUTURE))
                )
            )
    )
)