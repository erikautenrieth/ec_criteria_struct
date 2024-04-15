'INC'

'-  Normal blood pressure < 140 / 90 mmHg'

'-  pol(NORMAL) vital("blood pressure") eq(op(LT), val("140"), val("90"), unit("mmHg"))'

vital("blood pressure")
    .pol(NORMAL)
    .num_filter(
        eq(op(LT), val("140"), val("90"), unit("mmHg"))
    )