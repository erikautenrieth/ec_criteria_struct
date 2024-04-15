'EXC'

'-  Patients with one or more major risk factors for osteoporosis'

'-  Patients with eq(val("one"), op(GTEQ)) severity(SEVERE) risk() factors for cond("osteoporosis")'

risk(
    cond("osteoporosis")
)
    .min_count(
        eq(val("one"), op(GTEQ))
    )
    .severity(SEVERE)