'EXC'

'2.  Use of rituximab , tocilizumab , or any monoclonal antibody for immunomodulation within the past 9 months prior to Baseline .'

'2.  Use of drug("rituximab") , drug("tocilizumab") , or any drug("monoclonal antibody") for cond("immunomodulation") eq(op(LTEQ), val("9"), temporal_unit(MONTH)) prior to Baseline .'

union(
    drug("rituximab"),
    drug("tocilizumab"),
    drug("monoclonal antibody")
)
    .for(
        cond("immunomodulation")
    )
    .temporality(
        eq(op(LTEQ), val("9"), temporal_unit(MONTH))
    )