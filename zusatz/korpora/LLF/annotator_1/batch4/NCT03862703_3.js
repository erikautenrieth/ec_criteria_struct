'INC'

'3.  be referred to PTSD care package treatment ( Danske regioner , pakkeforløb for PTSD , 2017 )'

'3.  be enc(REFERRAL) to cond("PTSD") proc("care package treatment") ( Danske regioner , pakkeforløb for PTSD , 2017 )'

seq(
    enc(REFERRAL),
    during(
        proc("care package treatment")
            .for(
                cond("PTSD")
            )
    )
)
