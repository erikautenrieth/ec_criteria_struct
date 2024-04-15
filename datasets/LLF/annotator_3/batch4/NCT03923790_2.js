'INC'

'-  Presence of at least one of the following high risk criteria : uninsured , Medicaid payer status , small vessel ischemic stroke , hypertensive ICH )'

'-  Presence of eq(op(GTEQ), val("one")) pol(HIGH) risk() criteria() : insur("uninsured") , insur("Medicaid") , cond("small vessel ischemic stroke") , mod("hypertensive") cond("ICH") )'

risk()
    .pol(HIGH)
    .equiv(
        criteria(
            insur("uninsured"),
            insur("Medicaid"),
            cond("small vessel ischemic stroke"),
            cond("ICH")
                .mod("hypertensive")
        )
            .min_count(
                eq(op(GTEQ), val("one"))
            )
    )



