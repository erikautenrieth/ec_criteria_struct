'INC'

'2.  Patients undergoing elective primary ankle or hindfoot surgery ( ankle arthrodesis , subtalar arthrodesis , triple arthrodesis , total ankle arthroplasty , peroneal tendon debridement / transfer , Cavus Reconstruction , Medial Displacement Calcaneal Osteotomy , Dwyer Osteotomy )'

'2.  Patients eq(temporal_per(PRESENT)) elective mod("primary ankle") or mod("hindfoot") proc("surgery") ( proc("ankle arthrodesis") , proc("subtalar arthrodesis") , proc("triple arthrodesis") , proc("total ankle arthroplasty") , proc("peroneal tendon") mod("debridement") / mod("transfer") , proc("Cavus Reconstruction") , proc("Medial Displacement Calcaneal Osteotomy") , proc("Dwyer Osteotomy") )'

proc("surgery")
    .temporality(
        eq(temporal_per(PRESENT))
    )
    .mod("primary ankle")
    .mod("hindfoot")
    .equiv(
        proc("ankle arthrodesis"),
        proc("subtalar arthrodesis"),
        proc("triple arthrodesis"),
        proc("total ankle arthroplasty"),
        proc("peroneal tendon")
            .mod("debridement")
            .mod("transfer"),
        proc("Cavus Reconstruction"),
        proc("Medial Displacement Calcaneal Osteotomy"),
        proc("Dwyer Osteotomy")
    )