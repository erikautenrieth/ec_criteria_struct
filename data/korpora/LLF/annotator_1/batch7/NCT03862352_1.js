'INC'

'-  Any coronary artery perforation during percutaneous coronary intervention'

'-  Any proc("coronary artery perforation") during proc("percutaneous coronary intervention")'

seq(
    proc("coronary artery perforation"),
    during(
        proc("percutaneous coronary intervention")
    )
)