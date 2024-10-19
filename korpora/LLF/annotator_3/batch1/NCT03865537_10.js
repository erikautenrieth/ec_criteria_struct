'EXC'

'-  Patients with coagulopathy with an elevated INR ≥ 1.5 , or platelets < 50'

'-  Patients with cond("coagulopathy") with an pol(HIGH) lab("INR") eq(op(GTEQ), val("1.5")) , or lab("platelets") eq(op(LT), val("50"))'

intersect(
    cond("coagulopathy"),
    union(
        lab("INR")
            .pol(HIGH)
            .num_filter(
                eq(op(GTEQ), val("1.5"))
            ),
        lab("platelets")
            .num_filter(
                eq(op(LT), val("50"))
            )
    )
)