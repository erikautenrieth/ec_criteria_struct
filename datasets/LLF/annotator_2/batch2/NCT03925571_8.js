'EXC'

'-  Regular consumer of soft drug ( cannabis ) or hard drug ( opioid ) ,'

'-  Regular consumer of drug("soft drug") ( drug("cannabis") ) or drug("hard drug") ( drug("opioid") ) ,'

union(
    drug("soft drug")
        .equiv(
            drug("cannabis")
        ),
    drug("hard drug")
            .equiv(
                drug("opioid")
            )
)