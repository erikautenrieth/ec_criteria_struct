'EXC'

'-  Patients with incomplete colonoscopies ( those where endoscopists did not successfully intubate the cecum due to technical difficulties or poor bowel preparation )'

'-  Patients with mod("incomplete") proc("colonoscopies") ( those where endoscopists did neg() successfully proc("intubate") the mod("cecum") due to technical difficulties or mod("poor") proc("bowel preparation") )'

proc("colonoscopies")
    .mod("incomplete")
    .equiv(
        neg(
            proc("intubate")    
                .mod("cecum")
                .caused_by(
                    proc("bowel preparation")
                        .mod("poor")
                )
        )
    )
    