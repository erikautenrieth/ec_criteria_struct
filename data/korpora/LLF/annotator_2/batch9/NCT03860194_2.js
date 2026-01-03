'INC'

'-  Subject has lower appendicular muscle mass index ( AMMI ) ( < 7 kg / m^ 2 in men ; < 5.7 kg / m^ 2 in women ) using Bioelectrical impedance analysis ( BIA , TANITA BC - 418 ® , Tokyo , Japan )'

'-  Subject has measurement("lower appendicular muscle mass index") ( obs("AMMI") ) ( eq(op(LT), val("7"), unit("kg"), unit("m^ 2")) in male() ; eq(op(LT), val("5.7"), unit("kg"), unit("m^ 2")) in female() ) using proc("Bioelectrical impedance analysis") ( BIA , TANITA BC - 418 ® , Tokyo , Japan )'

measurement("lower appendicular muscle mass index")
    .equiv(
        obs("AMMI")
    )
    .num_filter(
        if_then(
            male(),
            eq(op(LT), val("7"), unit("kg"), unit("m^ 2"))
        ),
        if_then(
            female(),
            eq(op(LT), val("5.7"), unit("kg"), unit("m^ 2"))
        )
    )
    .found_by(
        proc("Bioelectrical impedance analysis")
    )
