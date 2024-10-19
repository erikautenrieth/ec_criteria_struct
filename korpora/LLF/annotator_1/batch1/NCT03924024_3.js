'INC'

'-  Present to Stanford Emergency Department as a trauma with a major operative lower extremity injury'

'-  enc() to loc(hosp("Stanford Emergency Department")) as a obs("trauma") with a mod("major operative lower extremity") obs("injury")'

seq(
    enc().loc(hosp("Stanford Emergency Department")),
    during(
        obs("trauma")
    ),
    during(
        obs("injury")
            .mod("major operative lower extremity")
    )
)