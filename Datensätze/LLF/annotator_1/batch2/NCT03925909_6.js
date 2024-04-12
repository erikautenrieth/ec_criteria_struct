'EXC'

'-  Use hypoglycemic , hypolipidemic drugs ,'

'-  eq(temporal_per(PRESENT)) drug("hypoglycemic") , drug("hypolipidemic") drugs ,'

union(
    drug("hypoglycemic"),
    drug("hypolipidemic")
)
.temporality(
    eq(temporal_per(PRESENT))
)