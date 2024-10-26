'INC'

'-  Twin gestation reduced to singleton either spontaneously or therapeutically , is not eligible unless the reduction occurred before 13 weeks 6 days project gestational age .'

'-  mod("Twin") obs("gestation") change() mod("singleton") either mod("spontaneously") or proc("therapeutically") , is neg() eligible except() the reduction occurred before eq(val("13"), temporal_unit(WEEK), val("6"), temporal_unit(DAY)) project measurement("gestational age") .'

neg(
    obs("gestation")
        .mod("Twin")
        .change()
        .mod("singleton")
        .mod("spontaneously")
        .caused_by(
            proc("therapeutically")
        )
)
    .except(
        measurement("gestational age")
            .num_filter(
                eq(val("13"), temporal_unit(WEEK), val("6"), temporal_unit(DAY))
            )
    )