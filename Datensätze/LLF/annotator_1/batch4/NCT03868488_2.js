'INC'

'-  Engagement in popular Internet games ( e . g .  Arena of Valor , League of Legends and Player Unknown\'s Battle Grounds ) for over 20 hours per week for a minimum of 12 months .'

'-  social_habit("Engagement in popular Internet games") ( e . g .  Arena of Valor , League of Legends and Player Unknown\'s Battle Grounds ) for eq(op(GT), val("20"), temporal_unit(HOUR), per(WEEK)) for a eq(op(GTEQ), val("12"), temporal_unit(MONTH)) .'

social_habit("Engagement in popular Internet games")
    .temporality(
        eq(op(GT), val("20"), temporal_unit(HOUR), per(WEEK))
    )
    .duration(
        eq(op(GTEQ), val("12"), temporal_unit(MONTH))
    )