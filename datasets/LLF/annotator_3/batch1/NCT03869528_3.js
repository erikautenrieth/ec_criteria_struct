'EXC'

'-  Uncontrolled hypertension Systolic Blood Pressure > 180 mm Hg'

'-  change() cond("hypertension") vital("Systolic Blood Pressure") eq(op(GT), val("180"), unit("mm Hg"))'

union(
    cond("hypertension")
        .change(),
    vital("Systolic Blood Pressure")
        .num_filter(
            eq(op(GT), val("180"), unit("mm Hg"))
        )
)
