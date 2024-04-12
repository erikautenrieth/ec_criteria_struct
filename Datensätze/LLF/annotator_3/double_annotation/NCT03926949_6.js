'EXC'

'3.  Patients with severe systemic diseases defined by American Society of Anesthesiologists ( ASA ) classification III to V'

'3.  Patients with severity(SEVERE) mod("systemic") cond() defined by clin_score("American Society of Anesthesiologists") ( clin_score("ASA") ) eq(unit("classification"), val("III"), op(BETWEEN), val("V"))'


cond()
    .mod("systemic")
    .severity(SEVERE)
    .union(
        clin_score("American Society of Anesthesiologists"),
        clin_score("ASA")
    )
        .eq(unit("classification"), val("III"), op(BETWEEN), val("V"))
