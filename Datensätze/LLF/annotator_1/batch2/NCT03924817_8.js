'EXC'

'-  Patients with completely missing teeth or removable tooth replacement , or with a teeth health insufficient to retain an MAD Patients with missing molars Patients with maximum protrusion of less than 5 mm'

'-  Patients with completely cond("missing teeth") or proc("removable tooth replacement") , or with a cond("teeth health") insufficient to retain an MAD Patients with cond("missing molars") Patients with measurement("maximum protrusion") of eq(op(LT), val("5"), unit("mm"))'

union(
    union(
        cond("missing teeth"), 
        proc("removable tooth replacement")
    ), 
    cond("teeth health"),
    cond("missing molars"),
    measurement("maximum protrusion")
        .num_filter(
            eq(op(LT), val("5"), unit("mm"))
        )
)