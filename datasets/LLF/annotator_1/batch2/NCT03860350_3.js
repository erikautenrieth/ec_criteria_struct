'INC'

'-  Subjects are required to be on stable concomitant medications for at least 12 weeks prior to randomization'

'-  Subjects are required to be on stable() mod("concomitant") drug() for eq(op(GTEQ), val("12"), temporal_unit(WEEK)) prior to randomization'

drug()
    .mod("concomitant")
    .stable()
    .temporality(
        eq(op(GTEQ), val("12"), temporal_unit(WEEK))
    )