'INC'

'-  Transferrin saturation ( TSAT ) ≥ 20 % ( during the screening phase ) ,'

'-  lab("Transferrin saturation") ( lab("TSAT") ) eq(op(GTEQ), val("20"), unit("%")) ( during the screening phase ) ,'

lab("Transferrin saturation")
    .equiv(
        lab("TSAT")
    )
    .num_filter(
        eq(op(GTEQ), val("20"), unit("%"))
    )