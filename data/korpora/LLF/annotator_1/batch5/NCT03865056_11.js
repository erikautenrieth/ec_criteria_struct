'EXC'

'6.  Systolic arterial pressure < 90 mmHg after optimal fluid therapy;'

'6.  vital("Systolic arterial pressure") eq(op(LT), val("90"), unit("mmHg")) after mod("optimal") proc("fluid therapy") ;'

seq(
    vital("Systolic arterial pressure")
        .num_filter(
                eq(op(LT), val("90"), unit("mmHg"))
    ),
    after(
        proc("fluid therapy")
            .mod("optimal")
    )
)