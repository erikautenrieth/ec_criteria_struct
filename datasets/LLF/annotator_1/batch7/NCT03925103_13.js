'EXC'

'-  Patients with severe comorbidity contraindicating lobectomy .'

'-  Patients with severity(SEVERE) cond("comorbidity") contraindication() proc("lobectomy") .'

contraindication(
    proc("lobectomy")
)
.caused_by(
    cond("comorbidity")
        .severity(SEVERE)
)