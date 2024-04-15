'INC'

'-  Body Composition Body Fat > 30 % for Women'

'-  Body Composition measurement("Body Fat") eq(op(GT), val("30"), unit("%")) for female()'

if_then(
    female(),
    measurement("Body Fat")
        .num_filter(
            eq(op(GT), val("30"), unit("%"))
        )
)
