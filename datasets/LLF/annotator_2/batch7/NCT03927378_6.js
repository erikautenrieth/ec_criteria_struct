'EXC'

'-  Severe complications during pregnancy ( such as severe preeclampsia , placenta accreta , or HELLP [ Hemolysis , Elevated Liver enzymes and Low Platelets ] syndrome ) ;'

'-  severity(SEVERE) cond("complications") during cond("pregnancy") ( such as severity(SEVERE) cond("preeclampsia") , cond("placenta accreta") , or cond("HELLP") [ cond("Hemolysis , Elevated Liver enzymes and Low Platelets") ] mod("syndrome") ) ;'

seq(
    cond("complications")
        .severity(SEVERE)
        .equiv(
            cond("preeclampsia")
                .severity(SEVERE),
            cond("placenta accreta"),
            cond("HELLP")
                .equiv(
                    cond("Hemolysis , Elevated Liver enzymes and Low Platelets")
                )
                .mod("syndrome")
        ),
    during(
        cond("pregnancy")
    )
)