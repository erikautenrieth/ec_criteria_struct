'EXC'

'2.  Patients without a definite diagnosis of hypertension ( for instance , if the patient has been taking antihypertensive drugs irregularly , it is difficult to confirm the diagnosis of hypertension) .'

'2.  Patients neg() a definite diagnosis of cond("hypertension") ( for instance , if the patient has been eq(temporal_per(PRESENT)) drug("antihypertensive drugs") irregularly , it is possible() to confirm the diagnosis of cond("hypertension") ) .'

neg(
    cond("hypertension")
)
    .equiv(
        if_then(
            drug("antihypertensive drugs")
                .temporality(
                    eq(temporal_per(PRESENT))
                ),
            cond("hypertension")
                .possible()
        )
    )