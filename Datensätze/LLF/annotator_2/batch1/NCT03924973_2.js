'INC'

'-  Requiring less than 40 minutes travel to the assessment center'

'-  Requiring eq(op(LT), val("40"), temporal_unit(MINUTE)) obs("travel") to the assessment center'

obs("travel")
    .temporality(
        eq(op(LT), val("40"), temporal_unit(MINUTE))
    )