'EXC'

'-  BP > 140 / 90 mmHg'

'-  vital("BP") eq(op(GT), val("140"), val("90"), unit("mmHg"))'

vital("BP")
    .num_filter(
        eq(op(GT), val("140"), val("90"), unit("mmHg"))
    )