'INC'

'-  BP > 130 / 85 mmHg'

'-  vital("BP") eq(op(GT), val("130"), val("85"), unit("mmHg"))'

vital("BP")
    .num_filter(
        eq(op(GT), val("130"), val("85"), unit("mmHg"))
    )
    