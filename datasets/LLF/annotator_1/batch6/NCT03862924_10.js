'EXC'

'-  medical contraindications to nicotine ( unstable angina , uncontrolled hypertension , or recent cardiovascular event , including hospitalization )'

'-  medical contraindication() to drug("nicotine") ( change() cond("angina") , change() cond("hypertension") , or eq(temporal_per(RECENT)) cond("cardiovascular event") , including enc(INPATIENT) )'

contraindication(
    drug("nicotine")
)
.equiv(
    cond("angina")
        .change(),
    cond("hypertension")
        .change(),
    cond("cardiovascular event")
        .temporality(
            eq(temporal_per(RECENT))
        )
        .equiv(
            enc(INPATIENT)
        )
)