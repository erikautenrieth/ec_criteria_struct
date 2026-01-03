'EXC'

'-  QTcF > 470 msec during the screening period .'

'-  measurement("QTcF") eq(op(GT), val("470"), unit("msec")) during the screening period .'

measurement("QTcF")
    .num_filter(
        eq(op(GT), val("470"), unit("msec"))
    )