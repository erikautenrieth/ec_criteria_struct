'INC'

'-  Patient has leg or buttock pain while walking'

'-  Patient has mod("leg") or mod("buttock") obs("pain") while obs("walking")'

intersect(
    obs("pain")
        .mod("leg")
        .mod("buttock"),
    obs("walking")
)