'EXC'

'-  Those taking flavonoid , nitrate / nitrite containing or fish oil containing supplements ( and unwilling to cease intake during , and 1 month preceding the trial ) or unwilling to maintain existing intake of other supplements .'

'-  Those eq(temporal_per(PRESENT)) drug("flavonoid") , drug("nitrate") / drug("nitrite containing") or mod("fish oil containing") drug("supplements") ( and unwilling to cease intake during , and 1 month preceding the trial ) or unwilling to maintain existing intake of other supplements .'

union(
    drug("flavonoid"),
    drug("nitrate"),
    drug("nitrite containing"),
    drug("supplements")
        .mod("fish oil containing")
)
