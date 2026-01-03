'EXC'

'9.  Regular online brain training or regular player of non - fluency verbal games , defined as doing these procedures at a frequency of twice weekly or greater during the year prior to screening .'

'9.  Regular social_habit("online brain training") or regular player of mod("non - fluency") social_habit("verbal games") , defined as doing these procedures at a frequency of eq(val("twice"), per(WEEK), op(GTEQ)) during the eq(temporal_unit(YEAR)) prior to screening .'

union(
    social_habit("online brain training"),
    social_habit("verbal games")
        .mod("non - fluency")
)
    .min_count(
        eq(val("twice"), per(WEEK), op(GTEQ)) 
    )
    .temporality(
        eq(temporal_unit(YEAR))
    )