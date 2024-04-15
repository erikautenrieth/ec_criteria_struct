'EXC'

'-  Patients with newly diagnosed tumors and tumors that have high ( > 90 % ) cure rate with safe standard therapy .'

'-  Patients with eq(temporal_rec(FIRST_TIME)) diagnosed cond("tumors") and cond("tumors") that have pol(HIGH) ( eq(op(GT), val("90"), unit("%")) ) obs("cure rate") with mod("safe") proc("standard therapy") .'

union(
    cond("tumors")
        .temporality(
            eq(temporal_rec(FIRST_TIME))
        ),
    intersect(
        cond("tumors"),
        obs("cure rate")
            .pol(HIGH)
            .num_filter(
                eq(op(GT), val("90"), unit("%"))
            ),
        proc("standard therapy")
            .mod("safe")
    )   
)