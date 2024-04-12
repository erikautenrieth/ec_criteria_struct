'EXC'

'-  Individuals currently taking carbidopa - levodopa or with known hypersensitivity of any component of carbidopa - levodopa'

'-  Individuals eq(temporal_per(PRESENT)) drug("carbidopa - levodopa") or with known cond("hypersensitivity") of any component of drug("carbidopa - levodopa")'

union(
    drug("carbidopa - levodopa")
        .temporality(
            eq(temporal_per(PRESENT))
        ),
    cond("hypersensitivity")
        .caused_by(
            drug("carbidopa - levodopa")
        )
)
