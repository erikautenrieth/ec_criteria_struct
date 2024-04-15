'EXC'

'- Currently taking Wellbutrin , Chantix , or other pharmacological smoking cessation aids that could confound results of the study'

'- eq(temporal_per(PRESENT)) taking drug("Wellbutrin") , drug("Chantix") , or other pharmacological drug("smoking cessation aids") that could confound results of the study'

union(
    drug("Wellbutrin"), 
    drug("Chantix"), 
    drug("smoking cessation aids")
)
.temporality(
    eq(temporal_per(PRESENT))
)