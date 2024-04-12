'EXC'

'5.  Pre - enrollment CPP < 60 mm Hg'

'5.  Pre - enrollment lab("CPP") eq(op(LT), val("60"), unit("mm Hg"))'

lab("CPP")
    .num_filter(
        eq(op(LT), val("60"), unit("mm Hg"))
    )