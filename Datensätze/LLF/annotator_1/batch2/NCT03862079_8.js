'EXC'

'-  Patients with a prior documented infection with mycormycetes'

'-  Patients with a eq(temporal_per(PAST)) documented cond("infection") with org("mycormycetes")'

cond("infection")
    .temporality(
        eq(temporal_per(PAST))
    )
    .caused_by(
        org("mycormycetes")
    )