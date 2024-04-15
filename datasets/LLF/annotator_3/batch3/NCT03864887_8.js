'EXC'

'-  Patients who regularly take anticoagulants , antiplatelet drugs'

'-  Patients who eq(temporal_per(PRESENT)) drug("anticoagulants") , drug("antiplatelet drugs")'

intersect(
    drug("anticoagulants"),
    drug("antiplatelet drugs")
)
    .temporality(
        eq(temporal_per(PRESENT))
    )
