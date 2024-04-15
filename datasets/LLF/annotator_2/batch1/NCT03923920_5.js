'EXC'

'-  History of congenital spinal stenosis or congenital spondyloarthropathy'

'-  eq(temporal_per(PAST)) of cond("congenital spinal stenosis") or cond("congenital spondyloarthropathy")'

union(
    cond("congenital spinal stenosis"),
    cond("congenital spondyloarthropathy")
)
    .temporality(
        eq(temporal_per(PAST))
    )