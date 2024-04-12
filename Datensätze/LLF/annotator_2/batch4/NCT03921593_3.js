'INC'

'-  Active on Pancreas Transplant Wait List'

'-  eq(temporal_per(PRESENT)) on obs("Pancreas Transplant Wait List")'

obs("Pancreas Transplant Wait List")
    .temporality(
        eq(temporal_per(PRESENT))
    )