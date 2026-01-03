'INC'

'-  Subject has lower handgrip strength ( < 26 kg in men ; < 18 kg in women ) using dynamometer ( CAMRY® , Zhongshan , Guangdong ) or slowly gait speed ( < 1 m / s )'

'-  Subject has measurement("lower handgrip strength") ( eq(op(LT), val("26"), unit("kg")) in male() ; eq(op(LT), val("18"), unit("kg")) in female() ) using proc("dynamometer") ( CAMRY® , Zhongshan , Guangdong ) or pol(LOW) measurement("gait speed") ( eq(op(LT), val("1"), unit("m"), per(SECOND)) )'


intersect(
    union(
        intersect(
            male(),
            measurement("lower handgrip strength")
                .num_filter(
                    eq(op(LT), val("26"), unit("kg"))
                ),
        ),
        intersect(
            female(),
            measurement("lower handgrip strength")
                .num_filter(
                    eq(op(LT), val("18"), unit("kg"))
                ),
        )
    ),
    union(
        proc("dynamometer"),
        measurement("gait speed")
            .pol(LOW)
            .num_filter(
                eq(op(LT), val("1"), unit("m"), per(SECOND))
            )
    )
)