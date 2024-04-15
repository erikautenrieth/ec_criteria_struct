'EXC'

'7.  currently taking β - blockers , calcium channel blockers , or prophylactic headache medications ( e . g . , amitriptyline , topiramate ) , or'

'7.  eq(temporal_per(PRESENT)) drug("β - blockers") , drug("calcium channel blockers") , or drug("prophylactic headache medications") ( e . g . , drug("amitriptyline") , drug("topiramate") ) , or'

union(
    drug("β - blockers"),
    drug("calcium channel blockers"),
    drug("prophylactic headache medications")
        .equiv(
            drug("amitriptyline"),
            drug("topiramate")
        )
)
.temporality(
    eq(temporal_per(PRESENT))
)