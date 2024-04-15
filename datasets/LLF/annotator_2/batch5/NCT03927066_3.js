'INC'

'-  Free of any systemic diseases including hypertension , diabetes , coronary artery disease , neurologic disease , or any other major medical co - morbidity'

'-  neg() any mod("systemic") cond() including cond("hypertension") , cond("diabetes") , cond("coronary artery disease") , cond("neurologic disease") , or any other severity(SEVERE) cond()'

neg(
    cond()
        .mod("systemic")
        .equiv(
            cond("hypertension"),
            cond("diabetes"),
            cond("coronary artery disease"),
            cond("neurologic disease"),
            cond()
                .severity(SEVERE)
        )
)