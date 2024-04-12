'EXC'

'4.  Pre - enrollment ICP > 20 mm Hg'

'4.  Pre - enrollment lab("ICP") eq(op(GT), val("20"), unit("mm Hg"))'

lab("ICP")
    .num_filter(
        eq(op(GT), val("20"), unit("mm Hg"))
    )
