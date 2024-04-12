'EXC'

'-  History of major eye surgery ( vitrectomy , cataract surgery , scleral buckle , other intraocular surgery , etc . ) within 90 days of enrollment'

'-  eq(temporal_per(PAST)) of severity(SEVERE) proc("eye surgery") ( proc("vitrectomy") , proc("cataract surgery") , proc("scleral buckle") , other proc("intraocular surgery") , etc . ) eq(op(LTEQ), val("90"), temporal_unit(DAY)) of enrollment'

proc("eye surgery")
    .severity(SEVERE)
    .temporality(
        eq(temporal_per(PAST))
    )
    .equiv(
        proc("vitrectomy"),
        proc("cataract surgery"),
        proc("scleral buckle"),
        proc("intraocular surgery")
    )
    .duration(
        eq(op(LTEQ), val("90"), temporal_unit(DAY))
    )