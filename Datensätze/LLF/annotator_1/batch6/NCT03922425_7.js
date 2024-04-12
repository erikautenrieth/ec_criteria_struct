'EXC'

'-  Patients who are under the age of 18 at the start of the study .'

'-  Patients who are eq(op(LT), val("18")) at the start of the study .'

age()
    .num_filter(
        eq(op(LT), val("18"))
    )