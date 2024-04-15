'EXC'

'-  ASA > 3 , morbid obesity BMI > 40 , Previous cardiac or ipsilateral thoracic surgery , Renal or hepatic failure , anemia , allergy to local anesthetics , contraindications to receive regional anesthesia , patient refusal , reiteration due to complication'

'-  clin_score("ASA") eq(op(GT), val("3")) , cond("morbid obesity") vital("BMI") eq(op(GT), val("40")) , eq(temporal_per(PAST)) mod("cardiac") or mod("ipsilateral") proc("thoracic surgery") , mod("Renal") or mod("hepatic") cond("failure") , cond("anemia") , allergy() to proc("local anesthetics") , contraindication() to receive proc("regional anesthesia") , patient refusal , obs("reiteration") due to cond()'

union(
    clin_score("ASA")
        .num_filter(
            eq(op(GT), val("3"))
        ),
    cond("morbid obesity")
        .equiv(
            vital("BMI")
                .num_filter(
                    eq(op(GT), val("40"))
                )
        ),
    proc("thoracic surgery")
        .mod("cardiac")
        .mod("ipsilateral"),
    cond("failure")
        .mod("Renal")
        .mod("hepatic"),
    cond("anemia"),
    allergy(
        proc("local anesthetics")
    ),
    contraindication(
        proc("regional anesthesia")
    ),
    obs("reiteration")
        .caused_by(
            cond()
        )
)