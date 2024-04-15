'EXC'

'-  Z scores for weight - for - age ( WAZ ) or weight - for - height ( WHZ ) < 3 ,'

'-  measurement("Z scores for weight - for - age") ( obs("WAZ") ) or measurement("weight - for - height") ( obs("WHZ") ) eq(op(LT), val("3")) ,'

union(
    measurement("Z scores for weight - for - age")
        .equiv(
            obs("WAZ")
        ),
    measurement("weight - for - height")
        .equiv(
            obs("WHZ")
        )
)
    .num_filter(
        eq(op(LT), val("3"))
    )
