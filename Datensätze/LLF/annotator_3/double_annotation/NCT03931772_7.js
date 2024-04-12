'EXC'

'- Meeting criteria for drug abuse of depressants , dissociative anesthetics , hallucinogens , opiods , cocaine , or amphetamine within last 3 months'

'- Meeting criteria for cond("drug abuse") of drug("depressants") , drug("dissociative anesthetics") , drug("hallucinogens") , drug("opiods") , drug("cocaine") , or drug("amphetamine") eq(op(LTEQ), temporal_unit(MONTH), val("3"))'


union(
    drug("depressants"),
    drug("dissociative anesthetics"),
    drug("hallucinogens"),
    drug("opiods"),
    drug("cocaine"),
    drug("amphetamine")
    )
    .cond("drug abuse")
    .num_filter(eq(op(LTEQ), temporal_unit(MONTH), val("3")))