'EXC'

'7.  Diastolic blood pressure < 40 mmHg or > 100 mmHg;'

'7.  vital("Diastolic blood pressure") eq(op(LT), val("40"), unit("mmHg")) or eq(op(GT), val("100"), unit("mmHg")) ;'

vital("Diastolic blood pressure")
    .num_filter(
        or(
            eq(op(LT), val("40"), unit("mmHg")), 
            eq(op(GT), val("100"), unit("mmHg"))
        )
    )