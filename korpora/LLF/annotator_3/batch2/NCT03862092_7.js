'EXC'

'-  Patients who take antiviral agents ( acyclovir , valacyclovir , famciclovir , ganciclovir , valganciclovir , foscarnet . . . )'

'-  Patients who eq(temporal_per(PRESENT)) drug("antiviral agents") ( drug("acyclovir") , drug("valacyclovir") , drug("famciclovir") , drug("ganciclovir") , drug("valganciclovir") , drug("foscarnet") . . . )'

union(
    drug("antiviral agents"),
    drug("acyclovir"),
    drug("valacyclovir"),
    drug("famciclovir"),
    drug("ganciclovir"),
    drug("valganciclovir"),
    drug("foscarnet")
)
    .temporality(
        eq(temporal_per(PRESENT))
    )
