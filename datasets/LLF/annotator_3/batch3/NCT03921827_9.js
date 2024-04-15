'EXC'

'6.  Persistent and uncontrolled hypertension ( BP persistently > 160 / 100 mmHg )'

'6.  stable() and change() cond("hypertension") ( vital("BP") stable() eq(op(GT), val("160"), val("100"), unit("mmHg")) )'

cond("hypertension")
    .stable()
    .change()
    .equiv(
        vital("BP")
            .stable()
            .num_filter(
                eq(op(GT), val("160"), val("100"), unit("mmHg"))
            )
    )

