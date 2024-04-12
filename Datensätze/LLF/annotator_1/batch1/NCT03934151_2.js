'INC'

'- Patients who underwent elective laparoscopic or video assisted right hemicolectomy at U.O. General and Thoracic Surgery for malignant or benign pathology .'

'- Patients who eq(temporal_per(PAST)) mod("elective laparoscopic") or mod("video assisted") proc("right hemicolectomy") at loc(hosp("U.O.")) mod("General") and mod("Thoracic") prov("Surgery") for mod("malignant") or mod("benign") cond("pathology")'

proc("right hemicolectomy")
    .temporality(
        eq(temporal_per(PAST))
    )
    .mod("elective laparoscopic")
    .mod("video assisted")
    .loc(hosp("U.O."))
    .prov("Surgery")
        .mod("General")
        .mod("Thoracic")
    .for(
        cond("pathology")
            .mod("malignant")
            .mod("benign")
    )