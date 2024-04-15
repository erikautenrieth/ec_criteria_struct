'INC'

'-  Has increase in polyneuropathy disability ( PND ) score after liver transplant'

'-  Has pol(HIGH) in cond("polyneuropathy disability") ( cond("PND") ) score after proc("liver transplant")'

seq(
    cond("polyneuropathy disability")
            .pol(HIGH)
            .equiv(
                cond("PND")
            )
    ,
    after(
        proc("liver transplant")
    )
)