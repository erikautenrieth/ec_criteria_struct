'EXC'

'-  Patients with a baseline platelet count of < 100 x 109 / L'

'-  Patients with a baseline lab("platelet count") of eq(op(LT), val("100"), val("109"), unit("L"))'

lab("platelet count")
    .num_filter(
        eq(op(LT), val("100"), val("109"), unit("L"))
    )