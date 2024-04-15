'EXC'

'-  Use of tetrahydrocannabinol ( THC ) or non - approved cannabidiol ( CBD ) is prohibited during the double - blind phase'

'-  eq(temporal_per(PRESENT)) of drug("tetrahydrocannabinol") ( drug("THC") ) or mod("non - approved") drug("cannabidiol") ( drug("CBD") ) is prohibited during the double - blind phase'

union(
    drug("tetrahydrocannabinol")
        .equiv(
            drug("THC")
        ),
    drug("cannabidiol")
        .mod("non - approved")
        .equiv(
            drug("CBD")
        )
)
    .temporality(
        eq(temporal_per(PRESENT))
    )