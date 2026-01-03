'INC'

'-  Has received stable immunosuppressive regimen with ≤ 10 mg / day of prednisone for at least 3 months before study start'

'-  Has eq(temporal_per(PAST)) stable() proc("immunosuppressive regimen") with eq(op(LTEQ), val("10"), unit("mg"), per(DAY)) of drug("prednisone") for eq(op(GTEQ), val("3"), temporal_unit(MONTH)) before study start'


proc("immunosuppressive regimen")
    .temporality(
        eq(temporal_per(PAST))
    )
    .stable()
    .equiv(
        drug("prednisone")
    )
    .duration(
        eq(op(GTEQ), val("3"), temporal_unit(MONTH))
    )