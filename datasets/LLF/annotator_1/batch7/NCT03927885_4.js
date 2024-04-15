'INC'

'-  Uncontrolled pain; patient is on opioids for the treatment of cancer pain , he / she must have had no major dose change ( > 25 % ) for at least 48 hours prior to study entry .  Change in opioid dose after study entry is allowed'

'-  change() obs("pain") ; patient is eq(temporal_per(PRESENT)) drug("opioids") for the proc() of cond("cancer") obs("pain") , he / she must have had stable() ( eq(op(GT), val("25"), unit("%")) ) for eq(op(GTEQ), val("48"), temporal_unit(HOUR)) prior to study entry .  Change in opioid dose after study entry is allowed'

intersect(
    obs("pain")
        .change(),
    drug("opioids")
        .temporality(
            eq(temporal_per(PRESENT))
        )
        .for(
            obs("pain")
                .caused_by(
                    cond("cancer")
                )
        )
        .stable()
        .temporality(
            eq(op(GTEQ), val("48"), temporal_unit(HOUR))
        )
)