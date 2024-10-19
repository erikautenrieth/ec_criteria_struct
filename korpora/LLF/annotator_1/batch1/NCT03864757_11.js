'EXC'

'-  Previous laryngeal framework surgery ( any type of thyroplasty , arytenoid adduction )'

'-  eq(temporal_per(PAST)) proc("laryngeal framework surgery") ( any type of proc("thyroplasty") , proc("arytenoid adduction") )'

proc("laryngeal framework surgery")
    .temporality(
        eq(temporal_per(PAST))
    )
    .equiv(
        proc("thyroplasty"), 
        proc("arytenoid adduction")
    )