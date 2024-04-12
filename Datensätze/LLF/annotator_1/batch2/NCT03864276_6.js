'EXC'

'-  4.  uncontrolled hypertension ( diastolic BP > 110 mmHg )'

'-  4. change() cond("hypertension") ( vital("diastolic BP") eq(op(GT), val("110"), unit("mmHg")) )'

cond("hypertension")
    .change()
    .equiv(
        vital("diastolic BP")
            .num_filter(
                eq(op(GT), val("110"), unit("mmHg"))
            )
        )