'EXC'

'-  Has asthma that requires therapy with inhaled or systemic corticosteroids , cromolyn , or nedocromil'

'-  Has cond("asthma") that indication() proc("therapy") with mod("inhaled") or mod("systemic") drug("corticosteroids") , drug("cromolyn") , or drug("nedocromil")'

intersect(
    cond("asthma"),
    indication(
        proc("therapy"),
        union(
            drug("corticosteroids"),
            drug("cromolyn"),
            drug("nedocromil")
        )
            .mod("inhaled")
            .mod("systemic")
    )
)