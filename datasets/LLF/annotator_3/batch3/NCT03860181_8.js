'INC'

'-  They self - report or have a documented prior ipsilateral shoulder arthroplasty or other open ispilateral shoulder surgery utilizing the delto - pectoral approach ;'

'-  They self - report or have a documented eq(temporal_per(PAST)) mod("ipsilateral") proc("shoulder arthroplasty") or other mod("open ispilateral") proc("shoulder surgery") utilizing the mod("delto - pectoral approach") ;'

union(
    proc("shoulder arthroplasty")
        .temporality(
            eq(temporal_per(PAST))
        )
        .mod("ipsilateral"),
    proc("shoulder surgery")
        .mod("open ispilateral")
        .mod("delto - pectoral approach")
)

