'INC'

'-  Background noise level ( at bedside ) at the time of music therapy must be 55 dB or less .'

'-  obs("Background noise level") ( at loc("bedside") ) at the time of proc("music therapy") must be eq(val("55"), unit("dB"), op(LTEQ)) .'

intersect(
    obs("Background noise level")
        .loc("bedside"),
    proc("music therapy")
        .num_filter(
            eq(val("55"), unit("dB"), op(LTEQ))
        )
)