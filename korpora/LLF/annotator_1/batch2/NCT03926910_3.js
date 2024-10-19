'INC'

'-  Euroscore with predicted mortality > 10 %'

'-  Euroscore with obs("predicted mortality") eq(op(GT), val("10"), unit("%"))'

obs("predicted mortality")
    .num_filter(
        eq(op(GT), val("10"), unit("%"))
    )