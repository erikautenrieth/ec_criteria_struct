'EXC'

'3.  Patients with severe systemic diseases defined by American Society of Anesthesiologists ( ASA ) classification III to V'

'3.  Patients with severity(SEVERE) mod("systemic") cond() defined by clin_score("American Society of Anesthesiologists") ( clin_score("ASA") ) eq(unit("classification"), val("III"), op(BETWEEN), val("V"))'

cond()
    .severity(SEVERE)
    .mod("systemic")
    .equiv(
        clin_score("American Society of Anesthesiologists")
            .equiv(
                clin_score("ASA")
            )
            .num_filter(
                eq(unit("classification"), val("III"), op(BETWEEN), val("V"))
            )
    )